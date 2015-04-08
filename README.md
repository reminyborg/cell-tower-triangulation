# cell-tower-triangulation
Triangulate position based on cell towers position and signal strength.

NB! Limited use in its current state.

##Use

```javascript
var cellTri = require('cell-tower-triangulation');

var towers = [
  {latitude:22.5234,longitude:23.2352,signal:-91}
  ...
]

var position = cellTri(towers);
// position = { latitude: *, longitude: * }

```


##Todo

* Implement accuracy (meters)
* Handle under 3 towers correctly

## Sources
[triangulation algorithm](http://www.neilson.co.za/mobile-network-geolocation-obtaining-the-cell-ids-the-signal-strength-of-surrounding-towers-from-a-gsm-modem/#triangulation-algorithm)
