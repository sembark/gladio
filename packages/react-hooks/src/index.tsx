import { useMemo, useRef, useEffect, useState, useCallback } from "react"
import {
  ownerDocument,
  activeElement,
  contains,
  listen,
} from "@tourepedia/dom-helpers"

export function useDidUpdate(fn: () => void, conditions: any = []): void {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      return
    }
    return fn()
  }, conditions)
}

export function useDidMount(fn: () => void): void {
  useEffect(() => fn(), [])
}

/**
 * useOnce
 * This hooks lets us do something in the first render call
 *
 * @param fn () => void - callback to run when first render
 */
export function useOnce(fn: () => void): void {
  const didOnce = useRef(false)
  if (!didOnce.current) {
    didOnce.current = true
    fn()
  }
}

/**
 * useEnforceFocus
 * This hook lets us constrain the focus inside a container component based on a condition
 * and return back to last focused element when the condition got true
 *
 * @param element React.RefObject<HTMLElement> - Ref object (useRef) to container element
 * @param open boolean - Trigger for enforcement and return focus to last focused element
 * @param config { autoFocus: boolean, enforceFocus: boolean } - Should the container element be auto focused (autoFocus)
 * and should the last activeElement be focused back
 */
export function useEnforceFocus(
  element: React.RefObject<HTMLElement>,
  open = true,
  { autoFocus, enforceFocus }: { autoFocus: boolean; enforceFocus: boolean } = {
    autoFocus: true,
    enforceFocus: true,
  }
) {
  const lastActiveElementRef = useRef<HTMLElement | null>(activeElement())

  // store the last active element
  lastActiveElementRef.current = useMemo(() => {
    if (open) {
      return activeElement()
    }
    return lastActiveElementRef.current
  }, [open])

  // focus the last focused element
  const focusOnLastActiveElement = useCallback(() => {
    if (enforceFocus && lastActiveElementRef.current) {
      setTimeout(() => {
        lastActiveElementRef.current && lastActiveElementRef.current.focus()
      })
    }
  }, [enforceFocus, lastActiveElementRef.current])

  // focus back last element when closed
  useEffect(() => {
    if (!open) {
      focusOnLastActiveElement()
    }
  }, [open, focusOnLastActiveElement])
  // or on unmount
  useEffect(() => {
    return focusOnLastActiveElement
  }, [])

  // auto focus the container
  // focus the container when opening if autoFocus is set to true
  useEffect(() => {
    const currentActiveElement = activeElement()
    if (
      open &&
      autoFocus &&
      element.current &&
      !contains(element.current, currentActiveElement)
    ) {
      element.current.focus()
    }
  }, [open, element.current, autoFocus])
  // and also enforce focus when tabbing through
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!open) return
      // handle the tab key
      if (event.keyCode === 9 && autoFocus) {
        // this is a tab event, prevent the focus from going out
        const currentActiveElement = activeElement()
        if (
          element.current &&
          !contains(element.current, currentActiveElement)
        ) {
          element.current.focus()
        }
      }
    },
    [open, element.current]
  )
  // add the event listeners
  useDidUpdate(() => {
    const document = ownerDocument()
    if (open && document) {
      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
    return
  }, [open, handleKeyDown])
}

export function useFetchState<ReturnType, ParamsType = any>(
  fetchFn: (data?: ParamsType) => Promise<ReturnType>,
  initialValues: {
    isFetching?: boolean
    data: ReturnType
  }
): [
  ReturnType,
  (data?: ParamsType) => Promise<ReturnType>,
  { isFetching: boolean; errors: any }
] {
  const [{ isFetching, data, errors }, changeData] = useState<{
    data: ReturnType
    isFetching: boolean
    errors?: any
  }>({
    isFetching: initialValues.isFetching || false,
    data: initialValues.data,
    errors: null,
  })
  const fetch = useCallback(
    async (...args: any) => {
      changeData({
        isFetching: true,
        errors: null,
        data: data,
      })

      return fetchFn(args)
        .then(data => {
          changeData({
            isFetching: false,
            data,
            errors: null,
          })
          return data
        })
        .catch(error => {
          changeData({
            isFetching: false,
            data,
            errors: error,
          })
          return Promise.reject(error)
        })
    },
    [changeData, fetchFn]
  )
  return [
    data,
    fetch,
    {
      isFetching,
      errors,
    },
  ]
}

const escapeKeyCode = 27
const noop = () => {}

function isLeftClickEvent(event: MouseEvent) {
  return event.button === 0
}

function isModifiedEvent(event: KeyboardEvent) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

/**
 * This is used achieve modal style behavior where your
 * callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */
export function useRootClose(
  ref: React.RefObject<HTMLElement> | HTMLElement,
  onRootClose?: (e: any) => void,
  {
    disabled,
    clickTrigger = "click",
  }: { disabled?: boolean; clickTrigger?: keyof HTMLElementEventMap } = {}
) {
  const preventMouseRootCloseRef = useRef(false)
  const onClose = onRootClose || noop

  const handleMouseCapture = useCallback(
    e => {
      const currentTarget = ref && ("current" in ref ? ref.current : ref)
      if (!currentTarget) {
        console.warn(
          "RootClose captured a close event but does not have a ref to compare it to. " +
            "useRootClose(), should be passed a ref that resolves to a DOM node"
        )
      }

      preventMouseRootCloseRef.current =
        !currentTarget ||
        isModifiedEvent(e) ||
        !isLeftClickEvent(e) ||
        contains(currentTarget, e.target)
    },
    [ref]
  )

  const handleMouse = useCallback(
    (e: any) => {
      if (!preventMouseRootCloseRef.current) {
        onClose(e)
      }
    },
    [onClose, preventMouseRootCloseRef.current]
  )

  const handleKeyUp = useCallback(
    e => {
      if (e.keyCode === escapeKeyCode) {
        onClose(e)
      }
    },
    [onClose]
  )

  useEffect(() => {
    const document = ownerDocument()
    if (disabled || ref == null || !document) return undefined

    // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.
    const removeMouseCaptureListener = listen(
      document,
      clickTrigger,
      handleMouseCapture,
      true
    )

    const removeMouseListener = listen(document, clickTrigger, handleMouse)
    const removeKeyupListener = listen(document, "keyup", handleKeyUp)

    let mobileSafariHackListeners: Array<() => any> = []
    if ("ontouchstart" in document.documentElement) {
      mobileSafariHackListeners = [].slice
        .call(document.body.children)
        .map((el: HTMLElement) => listen(el, "mousemove", noop))
    }

    return () => {
      removeMouseCaptureListener()
      removeMouseListener()
      removeKeyupListener()
      mobileSafariHackListeners.forEach(remove => remove())
    }
  }, [
    ref,
    disabled,
    clickTrigger,
    handleMouseCapture,
    handleMouse,
    handleKeyUp,
  ])
}

let ids: { [key: string]: number } = {
  "": 0,
}

function genId(prefix: string = "") {
  const id = (ids[prefix] = ids[prefix] || -0)
  ids[prefix] = ids[prefix] + 1
  return prefix + id.toString()
}

export function useId(prefix: string = ""): string {
  const id = useRef(genId(prefix.trim()))
  return id.current
}
