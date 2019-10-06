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

  return {
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
        return dialogIndex
      }

      const data = {
        dialogs: [dialog],
      }

      if (className) {
        container.classList.add(className)
      }

      containers.push(container)
      dataForContainerIndex.push(data)
      return dialogIndex
    },
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
    },
  }
}
