# React test project

Uses React, Webpack and Babel

## Install
 ```npm install``` to install all dependencies

## Run

 - run ```npm start``` to start webpack and webpack-dev-server - writes bundle file from memory only (no output file written to disk) - uses webpack-dev-server

- open browser on ```localhost:3434```

- run ```npm run write-bundle``` to start webpack and write ```bundle.js``` to ```dist``` folder

#### Todo

Babel transform plugin doesn't work. dependencies are in place but a run time erro is thrown:

**(0 , _typeof3.default) is not a function**

the following should go on ```.babelrc``` under **plugins** in order to enable transform plugin:

```
"transform-runtime",
["react-transform", {
  "transforms": [{
    "transform" : "react-transform-hmr",
    "imports"   : ["react"],
    "locals"    : ["module"]
  }]
}]

```
