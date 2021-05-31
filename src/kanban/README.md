# Kanban web-application

Kanban (Japanese: 看板, meaning signboard or billboard) is a scheduling system for lean manufacturing and just-in-time manufacturing (JIT).
Taiichi Ohno, an industrial engineer at Toyota, developed kanban to improve manufacturing efficiency.

![Image alt](https://github.com/efandor/external-courses/tree/ex17_js_components/src/kanban/src/img/kanban.png "Kanban screenshot")

## Installation

Clone project and install dependencies:

```bash
npm install
```

How to run WebPack dev server (http://localhost:9005/):

```bash
npm start
```

How to build project:

```bash
npm run build
```

## Features

There are 3 items in src folder:
- components (applications modules and state)
- img (static vector image files)
- Utils (functional modules)

## Features

`.js` files process by `babel` - JavaScript compiler configured `webpack-dev-server`
```js
export class Task {...}
import { Task } from "../components/Task/Task";

export default state; // [some data, some data, ...]
import state from "../components/State/State";

export const addTask = () => {...}
import { addTask } from './addTask';
```

`.svg`,`.png`, `.jpg` files processed by `file-loader`
```js
import logo from '../../img/logo.svg';
```

 `.css` files processed by `style-loader` and `css-loader`
 To use css as module, it should be named as `*.module.css`
 // This variable with lowerCamelCase naming contains in CSS file with kebab-case name .some-div-name
```js
import "./main.css";
import css from "./header.module.css"; 
<div style="${css.someDivName}"></div>;
```
