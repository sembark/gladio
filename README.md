# Tourepedia UI Components

## Getting started

Clone the repo and initialize the stuff

```bash
git clone git@github.com:tourepedia/tp-ui.git
cd tp-ui
npm install
npm bootstrap
npm build
```

## Directory Structure

```bash
packages - contains all the packages
```

## Scripts

```bash
npm start # start the development server (storybook)
npm build # build the packages
npm release # publish the updated packages to npm
npm run test # run test for all the packages
npm run test:watch # run the changes test in watch mode
npm run commit # to commit the changes
```

## How to

**Use lerna command**

```bash
npx lerna
```

**Publish a new package**

```bash
cd packages/new-packages
npm publish --access public
```
