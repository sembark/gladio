# Icons

We are using svgs for icons.

## Installation

```bash
npm install --save @gladio/icons
```

## Usage

```typescript
import { PhoneIcon } from "@gladio/icons"

function MyComponent() {
  return (
    <div>
      <PhoneIcon title="Call to John doe" />
    </div>
  )
}
```

## Contribution

1. Generating SVGs
   Head over to https://icomoon.io/app and choose icon(s). After selecting icon(s), click on `Generate SVG & More` from
   bottom navigation. From this view, download the svgs and paste the content of <downloaded_folder>/SVG into the
   `./svgs` folder. Append the styles from <downloaded_folder>/styles.css to `./icon.css`.

2 Copy the svg to the `src/svgs` folder

3 Add appropriate styles to the `src/icon.css` with css class be `tp-icon-[svg-file-name]`

4 Run `npm run prebuild` to build the component and update the imports files
