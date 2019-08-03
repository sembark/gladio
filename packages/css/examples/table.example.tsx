import * as React from "react"
import { storiesOf } from "@storybook/react"

const stories = storiesOf("Styles/Components/Table", module)

const tableInner = (
  <React.Fragment>
    <caption>List of character in God of War</caption>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date of Birth</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Kratos</td>
        <td>kratos.gow@example.com</td>
        <td>30 July, 1920</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Atreyas</td>
        <td>atreyas.gow@example.com</td>
        <td>20 April, 2000</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Mimir</td>
        <td>mimir.gow@example.com</td>
        <td>10 August, 1900</td>
      </tr>
    </tbody>
  </React.Fragment>
)

stories.add("Basic Table", () => (
  <div className="max-w-lg mx-auto">
    <table className="table">{tableInner}</table>
  </div>
))

stories.add("Striped Table", () => (
  <div className="max-w-lg mx-auto">
    <table className="table table-striped">{tableInner}</table>
  </div>
))

stories.add("Bordered Table", () => (
  <div className="max-w-lg mx-auto">
    <table className="table table-bordered">{tableInner}</table>
  </div>
))

stories.add("Responsive Table", () => (
  <div className="max-w-xs mx-auto">
    <div className="table-responsive">
      <table className="table table-striped table-bordered">{tableInner}</table>
    </div>
  </div>
))
