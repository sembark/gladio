# Tourepedia UI Components

## Getting started

Clone the repo and initialize the stuff

```bash
git clone git@github.com:tourepedia/tp-ui.git
cd tp-ui
npm install
npm run prestart
```

## Directory Structure

```bash
packages - contains all the packages
```

## Scripts

```bash
npm start # start the development server (storybook)
npm run build # build the packages
npm run release # publish the updated packages to npm
npm run test # run test for all the packages
npm run test:watch # run the changes test in watch mode
npm run commit # to commit the changes
npm run www # development for www
npm run deploy # deploy the www to gh-pages
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

**run test for a specific package only**

Use `--scope` from lerna

```bash
npm run test -- --scope=@tourepedia/button
```

**run build for a specific package only**
Use `--scope` from lerna

```bash
npm run build -- --scope=@tourepedia/button
npx lerna add @tourepedia/button --exact --scope=@tourepedia/button-group
```
