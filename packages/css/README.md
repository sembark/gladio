# Styles for Gladio

We are using tailwindcss for utility classes. You can use all the css classes defined on https://tailwindcss.com.

Along with them, following classes are also available

- Use `primary` color for alll the color related classes e.g. `.text-primary-300`, `bg-primary-600`
- Use `secondary` color similar to `primary` color
- Use `accent` color tag simpilar to `primary` color

Components classes

- `.btn` to make a button
- `.btn-primary` to make something a primary button
- `.badge` for badge level styles
- `.badge-primary` to make a badge primary

## Install

```
npm install --save @gladio/css
```

## Usage

> Make sure you have loader for css files

**in sass**

```
@include '@gladio/css/styles/styles.css'
```

**in js**

```
import '@gladio/css/styles/styles.css'
```

A JSON file for theme is also included

```js
import theme from "@gladio/css/lib/theme.json"
```
