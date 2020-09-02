// dom helpers

// are we in dom
export const isDom = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)

// does context contains node element
export function contains(context: Element | null, node: Element | null) {
  if (!node || !context) return false
  function fallback(context: Element, node: Node | null) {
    if (node) {
      do {
        if (node === context) return true
      } while ((node = node.parentNode))
    }

    return false
  }
  if (!isDom) return fallback(context, node)

  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) {
    return context.contains(node)
  }
  if (context.compareDocumentPosition) {
    return context === node || !!(context.compareDocumentPosition(node) & 16)
  }
  return fallback(context, node)
}

// get the container document
export function ownerDocument(node?: HTMLElement | Element): Document | null {
  return (node && node.ownerDocument) || (isDom ? document : null)
}

// get the active element
export function activeElement(
  doc: Document | null = ownerDocument()
): HTMLElement | null {
  if (!doc || !ownerDocument) {
    return null
  }
  doc = doc || ownerDocument()
  try {
    return (doc.activeElement as any) as HTMLElement
  } catch (e) {
    /* ie throws if no active element */
  }
  return null
}

/**
 * Add event listener
 */
export let optionsSupported = false
export let onceSupported = false

try {
  const options = {
    get passive() {
      return (optionsSupported = true)
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return (onceSupported = optionsSupported = true)
    },
  }
  if (isDom) {
    window.addEventListener("test", options as any, options)
    window.removeEventListener("test", options as any, true)
  }
} catch (e) {
  /* */
}

export type EventHandler<K extends keyof HTMLElementEventMap> = (
  this: HTMLElement,
  event: HTMLElementEventMap[K]
) => any

export type TaggedEventHandler<
  K extends keyof HTMLElementEventMap
> = EventHandler<K> & { __once?: EventHandler<K> }
/**
 * An `addEventListener` ponyfill, supports the `once` option
 */
export function addEventListener<K extends keyof HTMLElementEventMap>(
  node: HTMLElement | Document,
  eventName: K,
  handler: TaggedEventHandler<K>,
  options?: boolean | AddEventListenerOptions
) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    const { once, capture } = options
    let wrappedHandler = handler
    if (!onceSupported && once) {
      wrappedHandler =
        handler.__once ||
        function onceHandler(event) {
          this.removeEventListener(eventName, onceHandler, capture)
          handler.call(this, event)
        }
      handler.__once = wrappedHandler
    }

    node.addEventListener(
      eventName,
      wrappedHandler,
      optionsSupported ? options : capture
    )
  }

  node.addEventListener(eventName, handler, options)
}

export function removeEventListener<K extends keyof HTMLElementEventMap>(
  node: HTMLElement | Document,
  eventName: K,
  handler: TaggedEventHandler<K>,
  options?: boolean | EventListenerOptions
) {
  let capture =
    options && typeof options !== "boolean" ? options.capture : options

  node.removeEventListener(eventName, handler, capture)
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture)
  }
}

export function listen<K extends keyof HTMLElementEventMap>(
  node: HTMLElement | Document,
  eventName: K,
  handler: EventHandler<K>,
  options?: boolean | AddEventListenerOptions
) {
  addEventListener(node, eventName, handler, options)
  return () => {
    removeEventListener(node, eventName, handler, options)
  }
}
