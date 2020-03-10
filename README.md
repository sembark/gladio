# Shapes - Web UI Components library for Tourepedia

View the full documentation [here][docs].

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Contribution](#contribution)
  - [Local Setup](#local-setup)
  - [Code Overview](#code-overview)
  - [Directory Structure](#directory-structure)
  - [Scripts](#scripts)
- [FAQs](#faqs)

## Introduction

It is a components library build in React with Tailwind css.

## Installation

All the components are distributed under @tourepdia namespace on npm. Components can be installed one-by-one or you
can install all the them at once

**Install All**

To install all the components at one, please execute following command in the terminal:

```sh
npm i @tourepedia/ui --S
```

It will install all the components under the `@tourepedia/ui` package. Following packages/components will be installed

```js
import { Button, Input, Dialog } from "@tourepedia/ui"
```

It will also install all the styles at `@tourepedia/ui/styles/index.css` so be sure to include the css in your bundle.

**Install what Needed**

```sh
npm i @tourepedia/button @tourepedia/badge --S
```

Each module has it's own styles which are placed at `@tourepedia/[module]/styles/index.css` so be sure to include these
in your bundle.

## Contribution

Any kind of contribution is most welcome.

For contribution, please fork the repository and create PRs for your implementations and fixes.

### Local Setup

**System Prerequisites**

- node^12
- npm^6
- git

Clone the your repository locally and initialize the dependencies.

```bash
git clone git@github.com:[your_username]/tp-ui.git
cd tp-ui
npm install
npm run prestart
```

### Code Overview

This is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) managed by [lerna][lerna]. A bit understanding of [lerna][lerna] will help (but not required) to understand the modules and dependencies resolution.

### Directory Structure

```bash
packages - all the packages/components
www - documentation website
.storybook - storybook configuration
shared - build specific scripts
```

### Scripts

```bash
npm run storybook # run the storybook
npm run build:watch # watch the files and rebuild
npm start # run storybook and build:watch in parallel
npm run test # run test for all the packages
npm run test:watch # run the changes test in watch mode
npm run commit # to commit the changes
npm run www # development for www
npm run build # build the packages
npm run release # publish the updated packages to npm
```

When you are working on a particular package say `packages/dialog`, you can pass the `--scope` flag to run these scripts
only for `@tourepedia/dialog` module. For example,

```sh
npm run build:watch -- --scope=@tourepedia/dialog
```

This command will only watch for file changes within `@tourepedia/dialog` package only saving the memory for watchers.

## FAQs

Here is a list of commanly asked questions.

**Use lerna command**

```bash
npx lerna
```

**Execute a command for a specific package only**

Use `--scope` from lerna

```bash
npm run test -- --scope=@tourepedia/button # to run the tests inside buton only
npm run build -- --scope=@tourepedia/button # to build the button package
```

**Install a dependency for a package**
Use `--scope` from lerna with `lerna add`

```bash
npx lerna add @tourepedia/button --exact --scope=@tourepedia/button-group
```

[lerna]: https://github.com/lerna/lerna
[docs]: https://design.tourepedia.com
