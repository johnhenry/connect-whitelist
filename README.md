#connect-whitelist

Only allow requests from a given list of IP addresses.


## Example

```js
var express = require('express');
var app = express();
// ...
app.use(require('connect-whitelist')(["127.0.0.1"]));
app.listen(8080);
```