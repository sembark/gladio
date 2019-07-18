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
