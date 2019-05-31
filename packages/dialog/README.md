# Dialog Component

Use dialog component to show ui element inside a dialog or popup

## Install

```bash
npm install --save @tourepedia/dialog
```

## Usage

```js
import Dialog, { useDialog } from "@tourepedia/dialog"

function Continue({ onContinue }) {
  // helper react hook, (useState can also be used)
  const [isConfirmationVisible, showConfirm, hideConfirm] = useDialog()
  return (
    <div>
      <button onClick={showConfirm}>Continue</button>
      <Dialog open={isConfirmationVisible} onClose={hideConfirm} closeButton>
        <Dialog.Header>
          <Dialog.Title>Are you sure you want to continue ?</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          You will not be able to recover after this step!
        </Dialog.Body>
        <Dialog.Footer>
          <button
            onClick={() => {
              hideConfirm()
              onContinue()
            }}
          >
            Continue
          </button>{" "}
          <button onClick={hideConfirm}>Cancel</button>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}
```
