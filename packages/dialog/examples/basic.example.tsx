import * as React from "react"
import { storiesOf } from "@storybook/react"

import Dialog, { useDialog } from "./../src/index"

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
          <button onClick={open} className="border rounded py-2 px-3">
            Open The Dialog
          </button>
        </div>
        <Dialog open={isOpen} closeButton onClose={close}>
          <Dialog.Header>
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
            <button
              onClick={close}
              className="border rounded py-2 px-3 border-primary-600 bg-primary-600 hover:bg-primary-700 text-white"
            >
              Yes. I Agree!
            </button>
            <button onClick={close} className="border rounded py-2 px-3 ml-4">
              Naah!
            </button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
  return <DialogRenderer />
})
