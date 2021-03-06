# youngi-ui

A portfolio website dedicated to showcasing Youngi Kim's photographs taken
over the course of his backpacking trips around South-east Asia, and more.

The website content is being updated by headless CMS, most notably what and where
each images are placed in the DOM.

This website supports dark mode (with an odd case of a bug with the loading bar being black in Samsung Internet phones).
In the future, when Strapi, the headless CMS supports internationalization, we will add it in, if the demand
for Korean translation is still there.

## Requirements

- [Node](https://nodejs.org/en/) version 10.13+
- [Yarn](https://yarnpkg.com/en/)

## Documentation

If you want to contribute to this project, please read [CONTRIBUTING.md](CONTRIBUTING.md)
before doing so, as it has some guidelines around how this project is structured.

Components demos can be seen in [Storybook](https://youngi-storybook.netlify.app/). Feel free to raise a pull
request for suggestions or bug fixes.

## Versioning

`youngi-ui` follows the [Semantic Versioning](https://semver.org), as well as maintaining
a [changelog](https://keepachangelog.com). We rely on an internal tool to handle this for us.

Any new feature additions or changes will bump the project's version number listed in the
project's [package.json](package.json) incrementally by 0.1.0 (e.g. `1.2.3` becomes `1.3.0`),
this is also known as a minor version update.

Bug fixes will increment the patch version (e.g. `1.2.3` becomes `1.2.4`).

Breaking changes, which means all projects that relies on this project as a dependency, might
expect some broken code will increment the major version (e.g. `1.2.3` becomes `2.0.0`).

All breaking changes documentations can be found in [docs](docs).

- [v2.0.0 migration](docs/v2.0.0-migration.md)

## Links

- [Production website](https://youngikim.com/)
- [Strapi Headless CMS](https://youngi-cms.herokuapp.com/admin). If you wish to have access, please contact
  <jacktan165@gmail.com>.
- [Storybook](https://youngi-storybook.netlify.app/)
