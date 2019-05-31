# Styles for Tourepedia

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
npm install --save @tourepedia/css
```

## Usage

> Make sure you have loader for css files

**in sass**

```
@include '@tourepedia/css/lib/styles.css'
```

**in js**

```
import '@tourepedia/css/lib/styles.css'
```
