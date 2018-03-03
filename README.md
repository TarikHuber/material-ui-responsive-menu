# Material-UI responsive Menu
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Description

Material-UI responsive Menu is a React-Redux component that uses [Material-UI](http://www.material-ui.com/) to create a responsive IconMenu.
It shows MenuIcons if there is enough place for theme. If the width of the container element shrinks the MenuIcons move to a IconMenu list.

You can try it out the [DEMO](https://tarikhuber.github.io/material-ui-responsive-menu/).

## Installation

This project can be istalled as npm module using following command:

```bash
npm i -S material-ui-responsive-menu
```

## Usage

To use it just import the component and set as property a list of menu items:

```js

import {ResponsiveMenu} from 'material-ui-responsive-menu'

const menuList=[
  {
    text: 'test1',
    icon: undefined,
    tooltip: 'test1',
    icon: <ActionHome/>,
    onTouchTap: ()=>{console.log('test1')}
  },
  {
    text: 'test2',
    icon: <ActionHome/>,
    tooltip:'test2',
    onTouchTap: ()=>{console.log('test2')}
  },
  {
    text: 'test3',
    icon: <ActionHome/>,
    tooltip:'test2',
    onTouchTap: ()=>{console.log('test2')}
  }
]

...

//then in your component
<ResponsiveMenu menuList={menuList}/>

...



```

Thats it :)


An complete example can be found in the [App.js](https://github.com/TarikHuber/material-ui-responsive-menu/blob/master/demo/src/App.js) of the demo part of this project.


## Contributing

Every help no mather if it is a kritik, suggestion or pull request is welkome :)

[travis-image]: https://travis-ci.org/TarikHuber/material-ui-responsive-menu.svg?branch=master
[travis-url]: https://travis-ci.org/TarikHuber/material-ui-responsive-menu
[daviddm-image]: https://img.shields.io/david/TarikHuber/material-ui-responsive-menu.svg?style=flat-square
[daviddm-url]: https://david-dm.org/TarikHuber/material-ui-responsive-menu
[coverage-image]: https://img.shields.io/codecov/c/github/TarikHuber/material-ui-responsive-menu.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/TarikHuber/material-ui-responsive-menu
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://github.com/TarikHuber/material-ui-responsive-menu/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
