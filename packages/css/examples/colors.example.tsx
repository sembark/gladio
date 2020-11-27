import * as React from "react"
import { Meta } from "@storybook/react"

import "./../styles/styles.css"
import theme from "./../src/theme"

export default {
  title: "Styles/Colors",
  argTypes: {},
} as Meta

const { colors } = theme

export function Colors() {
  return (
    <div>
      <h3 style={{ marginBottom: "12px" }}>
        List of all the colors used in the designs.
      </h3>
      <table
        style={{ textAlign: "left", width: "100%", border: "1px solid silver" }}
      >
        <thead
          style={{
            whiteSpace: "pre",
            backgroundColor: theme.backgroundColor["gray-100"],
          }}
        >
          <tr>
            <th style={{ padding: "12px" }}>Color Prop Key</th>
            <th style={{ padding: "12px" }}>Value</th>
            <th style={{ width: "100%" }}>
              <div style={{ width: "20px" }} />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(colors).map((c) => (
            <tr key={c}>
              <th style={{ padding: "12px", whiteSpace: "pre" }}>{c}</th>
              <td style={{ padding: "12px" }}>{colors[c]}</td>
              <td
                style={{
                  backgroundColor: colors[c],
                }}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
