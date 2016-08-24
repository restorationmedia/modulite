# Modulite
## Portable node components


### Getting Started

**Install the package**
```
npm install --save modulite
```

**Build a Module**
*Directory Structure*
```
/app
-index.js
-/modules
--/mymod
---/classes
----/foo
-----bar.js
---/config
----foobar.js
```
*classes/foo/bar.js*
```
var mod = require('modulite');
var config = mod.get_config('mymod.foobar');
module.exports = {
    hello: function(){
        console.log(config.hello);
    }
};
```

*classes/config/foobar.js*
```
module.exports = {
    hello: 'Hello World!'
};
```

**Implement a module**
*app/index.js*
```
var Modulite = require('modulite');
var mod = new Modulite({path: './modules'});
var mymod = mod.load('mymod');
console.log(mymod); // {foo: {bar: {hello: function(){...}}}
mymod.hello(); //Hello World!
```

Modulite will load in all files in your classes folder and parse all config files for use in the modules, or anywhere else after the .load function is called.
