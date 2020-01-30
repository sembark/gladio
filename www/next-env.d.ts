/// <reference types="next" />
/// <reference types="next/types/global" />
//
declare module "*.svg" {
  import * as React from "react"

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  export default ReactComponent
}
