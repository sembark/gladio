module.exports = {
  icon: true,
  ext: "tsx",
  ref: true,
  titleProp: true,
  svgProps: {
    "aria-label": "{title}",
    "aria-hidden": "{!title ? 'true' : 'false'}",
  },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ["typescript"] })
    const componentNameWithSvgPrefix = componentName.name.replace(/^Svg/, "")
    const classNameExpression = template.ast(
      `'tp-icon tp-icon-${componentNameWithSvgPrefix
        .replace(/\B([A-Z])/g, "-$1")
        .toLowerCase()} ' + className`
    ).expression
    jsx.openingElement.attributes.push({
      type: "JSXAttribute",
      name: { type: "JSXIdentifier", name: "className" },
      value: {
        type: "JSXExpressionContainer",
        expression: classNameExpression,
      },
    })
    const ast = typeScriptTpl.ast`
    import * as React from 'react';
		interface ISVGComponentProps extends React.SVGProps<SVGSVGElement> {
			title?: string
		}
    const ${componentName} = ({ svgRef, title, className = "", ...props }: ISVGComponentProps & {
	svgRef?: React.Ref<SVGSVGElement>,
}) => ${jsx};
		const ForwardRef = React.forwardRef((props: ISVGComponentProps, ref: React.Ref<SVGSVGElement>) => (
			React.createElement(${componentName}, {
				svgRef: ref,
				...props
			})
		))
		export default ForwardRef
  `
    // add the displayName name
    ast.push(
      template.expression(
        `ForwardRef.displayName = '${componentNameWithSvgPrefix}Icon'`
      )()
    )
    return ast
  },
}
