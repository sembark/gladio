import {
  useMemo,
  useRef,
  useEffect,
  useState,
  useCallback,
  MutableRefObject,
} from "react"
import {
  ownerDocument,
  activeElement,
  contains,
  listen,
} from "@gladio/dom-helpers"

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
 * @param config { autoFocus: boolean, enforceFocus: boolean } - Should the container element be auto focused (autoFocus)
 * and should the last activeElement be focused back
 */
export function useEnforceFocus(
  element: React.RefObject<HTMLElement>,
  {
    init,
    autoFocus,
    restoreToLast,
    disabled,
  }: {
    init: boolean
    autoFocus: boolean
    restoreToLast: boolean
    disabled: boolean
  } = {
    init: true,
    autoFocus: true,
    restoreToLast: true,
    disabled: false,
  }
) {
  const lastActiveElementRef = useRef<HTMLElement | null>(activeElement())

  // store the last active element
  lastActiveElementRef.current = useMemo(() => {
    if (init) {
      return activeElement()
    }
    return lastActiveElementRef.current
  }, [init])

  // focus the last focused element
  const focusOnLastActiveElement = useCallback(() => {
    if (!disabled && restoreToLast && lastActiveElementRef.current) {
      setTimeout(() => {
        lastActiveElementRef.current && lastActiveElementRef.current.focus()
      })
    }
  }, [restoreToLast, lastActiveElementRef.current, disabled])

  // focus back last element when closed
  useEffect(() => {
    if (!init && !disabled) {
      focusOnLastActiveElement()
    }
  }, [init, focusOnLastActiveElement, disabled])
  // or on unmount
  useEffect(() => {
    return () => {
      if (!disabled && restoreToLast) {
        focusOnLastActiveElement()
      }
    }
  }, [])

  // auto focus the container
  // focus the container when opening if autoFocus is set to true
  useEffect(() => {
    const currentActiveElement = activeElement()
    if (
      !disabled &&
      init &&
      autoFocus &&
      element.current &&
      !contains(element.current, currentActiveElement)
    ) {
      element.current.focus()
    }
  }, [init, element.current, autoFocus, disabled])
  // and also enforce focus when tabbing through
  const handleFocusChange = useCallback(() => {
    if (!init || disabled) return
    const currentActiveElement = activeElement()
    if (element.current && !contains(element.current, currentActiveElement)) {
      element.current.focus()
    }
  }, [init, element.current])
  // add the event listeners
  useDidUpdate(() => {
    const document = ownerDocument()
    if (init && document && !disabled) {
      return listen(document, "focusin" as any, handleFocusChange)
    }
    return
  }, [init, handleFocusChange, disabled])
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

      return fetchFn(...args)
        .then((data) => {
          changeData({
            isFetching: false,
            data,
            errors: null,
          })
          return data
        })
        .catch((error) => {
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

export type RootCloseOptions = {
  disabled?: boolean
  clickTrigger?: keyof HTMLElementEventMap
}

const getRefTarget = (
  ref: React.RefObject<Element> | Element | null | undefined
) => ref && ("current" in ref ? ref.current : ref)

/**
 * This is used achieve modal style behavior where your
 * callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */
export function useRootClose(
  ref: React.RefObject<Element> | Element | null | undefined,
  onRootClose?: (e: any) => void,
  { disabled, clickTrigger = "click" }: RootCloseOptions = {}
) {
  const preventMouseRootCloseRef = useRef(false)
  const onClose = onRootClose || noop

  const handleMouseCapture = useCallback(
    (e) => {
      const currentTarget = getRefTarget(ref)
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
        !!contains(currentTarget, e.target)
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
    (e) => {
      if (e.keyCode === escapeKeyCode) {
        onClose(e)
      }
    },
    [onClose]
  )

  useEffect(() => {
    const document = ownerDocument()
    if (disabled || ref == null || !document) return undefined

    // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074
    let currentEvent = window.event

    // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.
    const removeMouseCaptureListener = listen(
      document,
      clickTrigger,
      handleMouseCapture,
      true
    )

    const removeMouseListener = listen(document, clickTrigger, (e) => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined
        return
      }
      handleMouse(e)
    })
    const removeKeyupListener = listen(document, "keyup", (e) => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined
        return
      }
      handleKeyUp(e)
    })

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
      mobileSafariHackListeners.forEach((remove) => remove())
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

/**
 * Hook to use the ref using `useState` designed to work with callback refs
 *
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 */
export function useCallbackRef<TValue = unknown>(): [
  TValue | null,
  (ref: TValue | null) => void
] {
  return useState<TValue | null>(null)
}

export type CallbackRef<T> = (ref: T | null) => void

export type Ref<T> = MutableRefObject<T> | CallbackRef<T>

function toFnRef<T>(ref?: Ref<T> | null): undefined | CallbackRef<T> {
  return (
    !ref || typeof ref === "function"
      ? ref || undefined
      : (value: T) => {
          ref.current = value
        }
  ) as CallbackRef<T> | undefined
}

export function mergeRefs<T>(refA?: Ref<T> | null, refB?: Ref<T> | null) {
  const a = toFnRef(refA)
  const b = toFnRef(refB)
  return (value: T | null) => {
    if (a) a(value)
    if (b) b(value)
  }
}

/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * Usefull when setting multiple refs with a single call
 */
export function useMergedRefs<T>(refA?: Ref<T> | null, refB?: Ref<T> | null) {
  return useMemo(() => mergeRefs(refA, refB), [refA, refB])
}
export type DOMContainer<T extends HTMLElement = HTMLElement> =
  | T
  | React.RefObject<T>
  | null
  | (() => T | React.RefObject<T> | null)

export function resolveContainerRef<T extends HTMLElement>(
  ref: DOMContainer<T> | undefined
): T | HTMLBodyElement | null {
  if (typeof document === "undefined") return null
  if (ref == null) {
    const doc = ownerDocument()
    if (!doc) return null
    return doc.body as HTMLBodyElement
  }
  if (typeof ref === "function") ref = ref()

  if (ref && "current" in ref) ref = ref.current
  if ((ref as any)?.nodeType) return (ref as unknown as T) || null

  return null
}

export function useWaitForDOMRef<T extends HTMLElement = HTMLElement>(
  ref: DOMContainer<T> | undefined,
  onResolved?: (element: T | HTMLBodyElement) => void
) {
  const [resolvedRef, setRef] = useState(() => resolveContainerRef(ref))

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref)
    if (earlyRef) setRef(earlyRef)
  }

  useEffect(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef)
    }
  }, [onResolved, resolvedRef])

  useEffect(() => {
    const nextRef = resolveContainerRef(ref)
    if (nextRef !== resolvedRef) {
      setRef(nextRef)
    }
  }, [ref, resolvedRef])

  return resolvedRef
}

export function useMounted(): () => boolean {
  const mounted = useRef(true)
  const isMounted = useRef(() => mounted.current)
  useEffect(
    () => () => {
      mounted.current = false
    },
    []
  )
  return isMounted.current
}

/**
 * Returns a ref that is immediately updated with the new value
 *
 * The returned "ref" won't change on re-rerenders, only the ref.current
 * will be updated
 *
 * @param value The Ref value
 */
export function useUpdatedRef<T>(value: T) {
  const valueRef = useRef<T>(value)
  valueRef.current = value
  return valueRef
}

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 */
export function useWillUnmount(fn: () => void) {
  const onUnmount = useUpdatedRef(fn)
  useEffect(() => () => onUnmount.current(), [])
}

/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 */
export function useTimeout() {
  const isMounted = useMounted()
  const handleRef = useRef<any>()
  useWillUnmount(() => clearTimeout(handleRef.current))
  return useMemo(() => {
    const clear = () => clearTimeout(handleRef.current)
    function set(fn: () => void, delayMs = 0): void {
      if (!isMounted()) return
      clear()
      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs)
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs)
      }
    }
    return {
      set,
      clear,
    }
  }, [])
}

/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */
const MAX_DELAY_MS = 2 ** 31 - 1

function setChainedTimeout(
  handleRef: MutableRefObject<any>,
  fn: () => void,
  timeoutAtMs: number
) {
  const delayMs = timeoutAtMs - Date.now()

  handleRef.current =
    delayMs <= MAX_DELAY_MS
      ? setTimeout(fn, delayMs)
      : setTimeout(
          () => setChainedTimeout(handleRef, fn, timeoutAtMs),
          MAX_DELAY_MS
        )
}
