# Little Alchemy
Based on recipes from [littlealchemy.com](https://littlealchemy.com/).

``` javascript
var la = require('little-alchemy');
la.getBaseElements(); => [ 'water', 'fire', 'earth', 'air']
la.combine('water', 'fire'); => [ 'steam' ]
```