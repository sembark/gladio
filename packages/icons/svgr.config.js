module.exports = {
  icon: true,
  ext: "tsx",
  ref: true,
  titleProp: true,
  svgProps: {
    "aria-label": "{title}",
    "aria-hidden": "{!title ? 'true' : 'false'}",
  },
  prettierConfig: {
    parser: "typescript",
  },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    // template = https://babeljs.io/docs/en/babel-template
    // this provides some convenient methods for template creation
    const typeScriptTpl = template.smart({ plugins: ["typescript"] })

    const componentNameWithSvgPrefix = componentName.name.replace(/^Svg/, "")
    /**
     * We can not simply just pass any variable to the typeScriptTpl.ast`` function and expect it to work.
     * For example, We're trying to add a className to the svg element, so to accomplish this,
     * we will need to create an expression first = `tp-icon tp-icon-componentName ${className}`
     * and then we will push that expression to the className attributes of the svg element,
     * in this case, the `jsx` variable
     */
    // create a className expression = "tp-icon tp-icon-" + componentName + " " + className
    const classNameExpression = template.ast(
      `'tp-icon tp-icon-${componentNameWithSvgPrefix
        .replace(/\B([A-Z])/g, "-$1")
        .toLowerCase()} ' + className + (rotate ? " rotate-" + rotate : "")`
    ).expression
    // now apply this className to the svg element
    jsx.openingElement.attributes.push({
      type: "JSXAttribute",
      name: { type: "JSXIdentifier", name: "className" },
      value: {
        type: "JSXExpressionContainer",
        expression: classNameExpression,
      },
    })
    /**
     * const { className, ...restProps } = removeStyleProps(props)
     * const boxStyles = getClassName(props)
     * const classname = classNames(boxStyles, className)
     */
    const ast = typeScriptTpl.ast`
    import * as React from 'react';
    import { StyleProps, getClassName, removeStyleProps } from "@gladio/css"
    interface ISVGComponentProps extends StyleProps, Omit<React.SVGProps<SVGSVGElement>, keyof StyleProps> {
			title?: string
      rotate?: "90" | "180" | "270"
		}
    const ${componentName} = ({ svgRef, title, className = "", rotate, titleId, ...props }: ISVGComponentProps & {
	svgRef?: React.Ref<SVGSVGElement>,
  titleId?: string
}) => {
  const boxClassName = getClassName(props)
  props = removeStyleProps(props)
  className = boxClassName && className ? (boxClassName + " " + className) : (boxClassName || className)
  return ${jsx}
};
		const ForwardRef = React.forwardRef((props: ISVGComponentProps, ref: React.Ref<SVGSVGElement>) => (
			React.createElement(${componentName}, {
				svgRef: ref,
				...props
			})
		))
		export default ForwardRef
  `
    // we could have simple added the following sentence to the typeScriptTpl.ast`` but it would not work as the
    // reason stated above. And so, we wll append an expression to the ast
    // add the displayName name
    ast.push(
      template.expression(
        `ForwardRef.displayName = '${componentNameWithSvgPrefix}'`
      )()
    )
    return ast
  },
}
