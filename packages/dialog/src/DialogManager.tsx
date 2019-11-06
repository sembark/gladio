type IDialog = string

export default function DialogManager(className?: string) {
  /**
   * List of containers
   */
  const containers: Array<HTMLElement> = []
  /**
   * List of dialogs
   */
  const dialogs: Array<IDialog> = []
  /**
   * To store any information for each containers
   */
  const dataForContainerIndex: Array<{ dialogs: typeof dialogs }> = []

  /**
   * List of listeners
   */
  const listeners: Array<() => any> = []

  function broadcast() {
    listeners.forEach(fn => fn && fn())
  }
  return {
    /**
     * Number of dialogs
     */
    length: () => dialogs.length,
    /**
     * Add a new dialog to the manager
     */
    add(dialog: IDialog, container: HTMLElement) {
      let dialogIndex = dialogs.indexOf(dialog)
      let containerIndex = containers.indexOf(container)
      if (dialogIndex !== -1) {
        return dialogIndex
      }
      dialogIndex = dialogs.length
      dialogs.push(dialog)
      if (containerIndex !== -1) {
        dataForContainerIndex[containerIndex].dialogs.push(dialog)
      } else {
        const data = {
          dialogs: [dialog],
        }
        if (className) {
          container.classList.add(className)
        }
        containers.push(container)
        dataForContainerIndex.push(data)
      }
      broadcast()
      return dialogIndex
    },
    /**
     * Remove a dialog
     */
    remove(dialog: IDialog) {
      let dialogIndex = dialogs.indexOf(dialog)
      if (dialogIndex === -1) {
        return
      }
      let containerIndex = dataForContainerIndex.findIndex(
        d => d.dialogs.indexOf(dialog) !== -1
      )
      let data = dataForContainerIndex[containerIndex]
      let container = containers[containerIndex]
      data.dialogs.splice(data.dialogs.indexOf(dialog), 1)
      dialogs.splice(dialogIndex, 1)
      // if this was the last dialog in the container, cleanup the container
      if (data.dialogs.length === 0) {
        if (className) {
          container.classList.remove(className)
        }
        containers.splice(containerIndex, 1)
        dataForContainerIndex.splice(containerIndex, 1)
      }
      broadcast()
    },
    /**
     * Subscribe to the changes
     */
    subscribe(subscriber: () => any) {
      let index = listeners.indexOf(subscriber)
      if (index === -1) {
        listeners.push(subscriber)
      }
      return () => {
        this.unsubscribe(subscriber)
      }
    },
    /**
     * Unsubscribe from changes
     */
    unsubscribe(unsubscriber: () => any) {
      let index = listeners.indexOf(unsubscriber)
      if (index !== -1) {
        listeners.splice(index, 1)
      }
    },
    /**
     * Is this dialog on top of all
     */
    isTop(dialog: IDialog): boolean {
      return Boolean(dialogs.length && dialogs[dialogs.length - 1] === dialog)
    },
  }
}
