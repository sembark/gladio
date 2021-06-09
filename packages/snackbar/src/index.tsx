import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
import { useTransition, animated, config } from "@react-spring/web"
import Icons from "@gladio/icons"
import { ownerDocument } from "@gladio/dom-helpers"
import { Optional, Omit } from "utility-types"

type TId = number | string

interface ISnackbarConfig {
  /**
   * Should the label and actions be stacked ? Should be set when we have a longer label
   * @default false
   */
  stacked?: boolean
  /**
   * Timeout for the visibility of snackbar in milliseconds
   * @default 5000
   */
  timeout?: number
  /**
   * Actions text
   */
  actionText?: string
  /**
   * On Click
   */
  onClick?: () => any
  /**
   * Id of the snackbar
   * This can be used in cases where we have a predefined id want
   * to know if a snackbar is already visible for it or not e.g. Network Errors
   */
  id?: TId
  /**
   * Handler when the snackbar is closed
   */
  onClosed?: () => any
}

interface ISnackbarProps
  extends ISnackbarConfig,
    Omit<React.HTMLProps<HTMLDivElement>, keyof ISnackbarConfig | "ref"> {
  /**
   * Label on the snackbar
   */
  children: React.ReactNode
}

export function Snackbar({
  stacked,
  children,
  actionText,
  onClick,
  id,
  onClosed,
  timeout = 5000,
  className,
  ...otherProps
}: ISnackbarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const transitions = useTransition(isOpen, {
    config: config.stiff,
    from: { opacity: 0, transform: "translateY(15px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(0)" },
    onDestroyed: onClosed,
  })
  // auto hide after the timeout
  useEffect(() => {
    if (timeout !== -1) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, timeout)
      return () => clearTimeout(timer)
    }
    return () => {}
  }, [timeout])
  return (
    <>
      {transitions((style, item) =>
        item ? (
          <animated.div
            {...otherProps}
            key={Number(item)}
            style={style}
            className={classNames(
              "snackbar",
              { "snackbar--stacked": stacked },
              className
            )}
            id={id ? String(id) : undefined}
          >
            <div role="status" aria-live="polite" className="snackbar__label">
              {children}
            </div>
            <div className="snackbar__actions">
              {actionText && onClick ? (
                <button
                  type="button"
                  onClick={() => {
                    onClick()
                    setIsOpen(false)
                  }}
                >
                  {actionText}
                </button>
              ) : null}
              <button
                type="button"
                className="snackbar__actions__close"
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <Icons.Cancel />
              </button>
            </div>
          </animated.div>
        ) : null
      )}
    </>
  )
}

let snackbarCount = 0

function getId(): string {
  return `snackbar_${++snackbarCount}`
}

const SNACKBAR_CONTAINER_ID = "snackbarContainer"

function findSnackbarContainerElement() {
  const document = getDocument()
  return document.getElementById(SNACKBAR_CONTAINER_ID)
}

function createSnackbarContainerElement() {
  const document = getDocument()
  const snackbarContainer = document.createElement("div")
  snackbarContainer.setAttribute("id", SNACKBAR_CONTAINER_ID)
  snackbarContainer.setAttribute("class", "snackbar-container")
  return snackbarContainer
}

function findOrCreateSnackbarContainerElement(): HTMLElement {
  return findSnackbarContainerElement() || createSnackbarContainerElement()
}

function createSnackbarElement(
  label: React.ReactNode,
  config: ISnackbarConfig
) {
  const document = getDocument()
  const body = document.body
  const snackbarContainer = findOrCreateSnackbarContainerElement()
  body.appendChild(snackbarContainer)
  ReactDOM.render(
    <Snackbar key={config.id} {...config}>
      {label}
    </Snackbar>,
    snackbarContainer
  )
  return snackbarContainer
}

/**
 * Remove any snackbar elements
 */
function clearSnackbarElements() {
  const snackbarContainer = findSnackbarContainerElement()
  if (!snackbarContainer) {
    return
  }
  // unmount any existing nodes
  ReactDOM.unmountComponentAtNode(snackbarContainer)
}

/**
 * List of snackbars
 */
const snackbars: { [key: string]: { id: TId; open: boolean } } = {}

/**
 * In queue snackbars
 */
const queue: Array<ISnackbarProps> = []

let lastVisibleSnackbarId: TId | undefined = undefined

/**
 * Open a snackbar with an id
 */
export function showSnackbar(
  label: React.ReactNode,
  actionText?: string,
  config: Optional<ISnackbarConfig, "onClick"> = {}
) {
  const id = config.id || getId()
  if (lastVisibleSnackbarId !== undefined || lastVisibleSnackbarId === id) {
    // only push to the queue if not already present
    if (!queue.some((s) => s.id === id)) {
      queue.push({
        children: label,
        actionText,
        ...config,
      })
    }
    return id
  }
  createSnackbarElement(label, {
    onClosed: () => hideSnackbar(id),
    actionText,
    id,
    ...config,
  })
  snackbars[id] = { id: id.toString(), open: true }
  lastVisibleSnackbarId = id
  return id
}

/**
 * Open a snackbar with an id
 */
export function hideSnackbar(id: TId) {
  const snackbar = get(id)
  if (!snackbar || lastVisibleSnackbarId !== id) {
    return
  }
  clearSnackbarElements()
  lastVisibleSnackbarId = undefined
  snackbar.open = false

  if (queue.length > 0) {
    const snackbar = queue.shift()
    if (snackbar) {
      const { children, actionText, ...config } = snackbar
      showSnackbar(children, actionText, config)
    }
  }
}

/**
 * Get a snackbar with an id
 */
function get(id: TId) {
  return snackbars[id.toString()]
}

/**
 * Check if a snackbar with an id is open or not
 */
export function isOpenSnackbar(id: TId) {
  const snackbar = get(id)
  return snackbar ? snackbar.open : false
}

/**
 * Open a snackbar for an Id if not already opened
 */
export function showSnackbarIfNot(
  id: TId,
  label: React.ReactNode,
  actionText?: string,
  config?: ISnackbarConfig
): TId {
  if (isOpenSnackbar(id)) {
    return id
  }
  return showSnackbar(label, actionText, config ? { ...config, id } : { id })
}

/**
 * Return the document or DIE!!
 */
function getDocument(): HTMLDocument {
  const document = ownerDocument()
  if (!document) {
    throw Error("can not find a document to append the snackbar")
  }
  return document
}
