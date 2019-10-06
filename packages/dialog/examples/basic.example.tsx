import * as React from "react"
import { storiesOf } from "@storybook/react"

import Dialog, { useDialog } from "./../src/index"
import Button from "./../../button/src"
import "./../../button/styles/styles.css"
import "./../styles/styles.css"

const stories = storiesOf("Components/Dialog", module)

stories.add("Dialog", () => {
  function DialogRenderer() {
    const [isOpen, open, close] = useDialog()
    return (
      <div>
        <h3 className="text-center">
          Use dialog component to show a ui inside a popup
        </h3>
        <div className="text-center">
          <Button primary branded onClick={open}>
            Open The Dialog
          </Button>
        </div>
        <Dialog open={isOpen} onClose={close}>
          <Dialog.Header closeButton>
            <Dialog.Title>Terms and Conditions</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <h3>Terms</h3>
            <p>
              Several types of agreements are related to tenancy or
              tenant/landlord business relationships.
            </p>
            <p>
              A security deposit agreement outlines the amount of security
              deposit to be collected, the reasons why the deposit may be kept,
              and when and how it will be returned to the tenant. The security
              deposit agreement is often part of a longer lease agreement.
            </p>
            <p>
              A lease agreement gives the terms of a lease, such as whether it
              is a month-to-month lease or for a fixed period of time. A
              sublease agreement is between a current tenant and a new tenant
              who temporarily will rent the space from the current tenant.
            </p>
            <p>
              All of these tenancy agreements also will have information about
              payment, expectations while renting the space, and beginning and
              end dates of the rental term. Our tenancy agreement templates help
              you ensure that all of the necessary information is there.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={close} primary branded>
              Yes. I Agree!
            </Button>
            <Button onClick={close} tertiary>
              Naah!
            </Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
  return <DialogRenderer />
})

stories.add("Dialog within Dialog", () => {
  function DialogRenderer() {
    const [isOpen, open, close] = useDialog()
    const [isOpen2, open2, close2] = useDialog()
    return (
      <div>
        <div className="text-center">
          <Button primary branded onClick={open}>
            Open First Dialog
          </Button>
        </div>
        <Dialog open={isOpen} onClose={close}>
          <Dialog.Header closeButton>
            <Dialog.Title>Some title here</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <h3>Some content</h3>
            <p>some content here and some more suff</p>
            <Button primary branded onClick={open2}>
              Anothre One
            </Button>
            <Dialog open={isOpen2} onClose={close2}>
              <Dialog.Header closeButton>
                <Dialog.Title>Another Dialog</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>Here is some text</Dialog.Body>
              <Dialog.Footer>
                <Button onClick={close2} primary branded>
                  Okay
                </Button>
              </Dialog.Footer>
            </Dialog>
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={close} tertiary>
              Close
            </Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
  return <DialogRenderer />
})
