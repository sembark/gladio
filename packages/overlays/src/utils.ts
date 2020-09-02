import { Config, UsePopperOptions, Modifiers } from "./popper"

/**
 * Merge a given config with popper configuration with shorthand support
 */
export function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  containerPadding,
  arrowElement,
  popperConfig = {},
}: Config): UsePopperOptions {
  const modifiers = toModifierMap(popperConfig.modifiers)
  return {
    ...popperConfig,
    placement,
    enabled,
    modifiers: toModifierArray({
      ...modifiers,
      eventListeners: {
        enabled: enableEvents,
      },
      preventOverflow: {
        ...modifiers.preventOverflow,
        options: containerPadding
          ? {
              padding: containerPadding,
              ...modifiers.preventOverflow?.options,
            }
          : modifiers.preventOverflow?.options,
      },
      offset: {
        options: {
          offset,
          ...modifiers.offset?.options,
        },
      },
      arrow: {
        ...modifiers.arrow,
        enabled: !!arrowElement,
        options: {
          ...modifiers.arrow?.options,
          element: arrowElement,
        },
      },
      flip: {
        enabled: !!flip,
        ...modifiers.flip,
      },
    }),
  }
}

/**
 * Given a modifiers array, create a mapping of modifiers with name as key
 */
function toModifierMap(modifiers: Modifiers | undefined) {
  const result: Modifiers = {}
  if (!Array.isArray(modifiers)) {
    return modifiers || result
  }
  modifiers?.forEach((m) => {
    result[m.name!] = m
  })
  return result
}

/**
 * Given a modifiers mapped object, create an array that can be passed to popper options
 */
function toModifierArray(map: Modifiers | undefined = {}) {
  if (Array.isArray(map)) return map
  return Object.keys(map).map((k) => {
    map[k].name = k
    return map[k]
  })
}
