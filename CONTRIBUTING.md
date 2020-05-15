# Contributing

## Quick Start

- `yarn` to install the project dependencies
- `yarn start` to run the project on `localhost:3000`

## Useful Commands

- `yarn` to install the project dependencies
- `yarn start` to run the project on `localhost:3000`
- `yarn build` to build the project into `.next` dir
- `yarn start:build` to run the project inside `.next` dir
- `yarn export` to build the project as a static site into `out` dir
- `yarn sb` to run [React Storybook](https://storybooks.js.org/docs) on `localhost:9000`
- `yarn build:sb` to build [React Storybook](https://storybooks.js.org/docs)
- `yarn test` run [Jest](https://facebook.github.io/jest/) tests on watch
- `yarn test:ci` run [Jest](https://facebook.github.io/jest/) tests but not on watch

## Project Conventions

This project uses the following tools:

- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Sass](https://sass-lang.com/documentation)
- [React](https://reactjs.org/docs/getting-started.html)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [React Storybook](https://storybook.js.org/docs/basics/introduction/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro)

These are a list of linting tools this project uses:

- [eslint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)

This project uses [Next.js](https://nextjs.org/) and adheres to this framework standard.

### Pull Requests

Because this project follows [Semantic Versioning](https://semver.org), we rely on [Standard Version](https://github.com/conventional-changelog/standard-version)
and [CommitLint](https://github.com/conventional-changelog/commitlint) to maintain this standard. As long as [Husky](https://github.com/typicode/husky) works
on your project, it should restrict your commit messages to contain the [structural elements](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary).

In most cases, almost all commit messages will began with

- `feat:` for new features or changes. Note this will update the minor version. (e.g. `0.2.3` becomes `0.3.0`).
- `fix:` for bug fixes
- `chore:` for maintaining the codebases
- `docs:` for updating any documentations
- `refactor:` for any code refactoring

In all cases other than `feat:`, this will update the minor version. (e.g. `0.2.3` becomes `0.2.4`).

If there are breaking changes however, add the usual commit message, but append `BREAKING CHANGE:` in a new line.
This will update the major version (e.g. `0.2.3` becomes `1.0.0`).

```
fix: timer component now shows the correct time
BREAKING CHANGE: renamed timer prop `X` to `Y` because...
```

## BEM

This project uses BEM. All components must create a BEM object by passing in it's CSS module file.

```tsx
import styles from "./index.module.scss";

const bem = createBem(styles);
```

BEM elements and modifiers can be passed as an argument. If you wish to pass multiple modifiers, pass in an object.

```tsx
<div
  className={bem("element", {
    modifier1: true,
    modifier2: false,
    modifier3: true,
  })}
/>
```

## Next.js

### Global imports/variables.

`Next.js` only allows global imports or variables (e.g. global CSS variables like `:root`) to be in `/pages/_app.tsx`.

### CSS Modules

`Next.js` supports CSS-in-JS or CSS Modules. This project uses CSS Modules. What this means is that CSS class names can be
imported in Javascript.

```scss
.root {
  &__test {
    color: var(--title-primary);
  }
}
```

```tsx
import styles from "./index.module.scss";

const bem = createBem(styles);

<div className={bem("test")}>test</div>;
```

### Exporting SCSS variables

To export scss variables, you can do so via:

```scss
:export {
  global: {
    variable: 5;
  }
}
```

Note that all CSS variables being exported must be under `global`.

### Inline SVG

`Next.js` do not support inline SVG by default. This project is able to get around it by adding its own custom loader to handle it.
The problem however, is that it does not follow `Next.js` assets pattern. All assets are normally placed under `/public` are
referenced via `tsx<img src="/path/to/asset" />`. Inline SVGs are imported via Javascript like so `import Svg from './file.inline.svg'`.

### File Structures

Following `v2.0.0` onwards, this project is adhereing to `Next.js` standards and best practices. Here is a quick
general overview over how this project is structured:

- `/config` stores custom webpack and Jest configs. Generally this directory is rarely modified. The custom webpack
  config is only used for React storybook, pre v2.0.0 to run/build client side app, and to append Next.js default webpack config.
- `/components` stores all common React components that are being used multiple times across the application.
- `/pages` is how `Next.js` handles routing. The routing is based on files and directories names.
  (e.g. `localhost:3000/page1/app` is located in `/pages/page1/app.tsx`). For more information, have a look at their
  [routing guide](https://nextjs.org/docs/routing/introduction). All files here MUST only export files from `/src`.
- `/public` is how `Next.js` knows where assets are. If you add this following line

```tsx
<img src="/dog.png" />
```

`/dog.png` is located in `/public/dog.png`.

- `/src` are where pages are located and are referenced in `/pages`.
  `Next.js` do not support files that don't export a React component inside `/page`, like `*.test.tsx`
  and `*.stories.tsx`. Have a look at this [issue](https://github.com/zeit/next.js/issues/8617) or this other [issue](https://github.com/zeit/next.js/issues/4315)
  for more information. All components will have their own directory, with their tests, scss files, and React storybook grouped together.
- `/styles` are where all global CSS variables are located. They are referenced in `/pages/_app.tsx`, which is the only file
  `Next.js` allows to have global imports or variables.
- `/types` stores all global typescript definitions.

### File Naming Conventions

- React components ends with `.tsx`.
- For non react components such as utils, they must end with `.ts`.
- Test files must end with `.test.ts` or `.test.tsx`.
- Scss files must end with `.module.scss`.
- Inline SVGs must end with `.inline.svg`, otherwise `.svg` will do.
- React storybook files must end with `.stories.tsx` and are only allowed inside `/src`.

## Known issues

### IE11

This project currently does not support IE11 and [https://death-to-ie11.com/](have no intention of doing so).
