
# NS Object

## An easy to use namespace configuration utility

`nsobject` makes it easy to configure data you need available in a singleton fashion across all instances of an object or require calls that don't cache for some reason.

### Getting Started

**Install the module:**
```
npm install --save nsobject
```

**Require the module:**
```
var nsobject = require('nsobject');
```

**Create your namespace:**
```
var namespace = nsobject.create('DB.MONGO', {
    host: 'localhost',
    port: 1000
});
```

**Now that you created your namespace you can access it in any file using the namespace key!!**
```
var namespace = nsobject.get('DB.MONGO');
    console.log(namespace.host); //localhost
    console.log(namespace.port); 1000
```

**Override namespace object properties and they'll stick:**

*file a -*
```
var namespace = nsobject.get('DB.MONGO');
    namespace.host = 'http://mongo.remote-01.com';
```

*file b -*
```
var namespace = nsobject.get('DB.MONGO');
    console.log(namespace.host); //http://mongo.remote-01.com
```

**OR override the entire ns object:**
```
var namespace = nsobject.set('DB.MONGO', {foo: 'bar'});
```
