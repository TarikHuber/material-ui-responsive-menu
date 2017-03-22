# Material-UI responsive Drawer

## Table of Contents

- [Description](#description)
- [Installation](#instalaltion)
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
