(window.webpackJsonp=window.webpackJsonp||[]).push([["3e99"],{"4FUK":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components",function(){var e=t("Yk0I");return{page:e.default||e}}])},Yk0I:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var o=t("kOwS"),a=t("qNsG"),l=(t("q1tI"),t("E/Ix")),i=t("Cgje"),s=(t("vUXE"),t("m/Pd")),c=t.n(s),p={},u="wrapper";function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(u,Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(i.a,{mdxType:"Header"}),Object(l.b)(c.a,{mdxType:"Head"},Object(l.b)("title",null,"Components | Tourepedia Design System")),Object(l.b)("div",{className:"max-w-4xl px-4 mx-auto"},Object(l.b)("div",{className:"text-center mt-16"},Object(l.b)("h1",{className:"text-4xl md:text-6xl font-light"},"Components"),Object(l.b)("h2",{className:"text-2xl md:text-3xl font-light"},"React components for the Tourepedia Design System")),Object(l.b)("div",{className:"mt-20"},Object(l.b)("h2",null,"Introduction"),Object(l.b)("p",null,"Using our designs system, we have built some reusable component for easily creating markup in React. Bellow is the\nlist of components and live editor to play with them."),Object(l.b)("h3",null,"Button"),Object(l.b)("h4",null,"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @tourepedia/button\n")),Object(l.b)("h4",null,"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import Button from "@tourepedia/button"\n\nfunction App () {\n  return <Button>Button</Button>\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'<Button primary type="button">Click Me!</Button>\n')),Object(l.b)("h3",null,"Dialog"),Object(l.b)("h4",null,"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @tourepedia/dialog\n")),Object(l.b)("h4",null,"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import Dialog, { useDialog } from "@tourepedia/dialog"\n\nfunction App () {\n  const [isOpen, open, close] = useDialog(false)\n  return <>\n    <Dialog open={isOpen} onClose={close}>\n      Dialog Content Here\n    </Dialog>\n    <Button onClick={open}>Open</Button>\n  </>\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"function () {\n  const [isOpen, open, close] = useDialog(false)\n  return <div>\n    <Dialog open={isOpen} onClose={close}>\n      <Dialog.Header>\n        <Dialog.Title>Dialog Title</Dialog.Title>\n      </Dialog.Header>\n      <Dialog.Body>\n        <h2>Here is some stuff inside the dialog</h2>\n        <p>Some lorem ipsum text</p>\n      </Dialog.Body>\n      <Dialog.Footer>\n        <Button primary onClick={close}>OK! Close Now</Button>\n      </Dialog.Footer>\n    </Dialog>\n    <p>Here is a simple Dialog Component</p>\n    <Button onClick={open}>Open Dialog</Button>\n  </div>\n}\n")))))}b.isMDXComponent=!0}},[["4FUK","5d41","9da1","ad9d"]]]);