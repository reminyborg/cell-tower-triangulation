/*jshint node:true*/
'use strict';

module.exports = cellTowerTriangulation;

function cellTowerTriangulation(towers){

    var total = towers.reduce(function(last,tower){ return last + tower.signal;},0);

    var latitude = 0;
    var longitude = 0;
    for (var i = 0; i < towers.length; i++) {
        var ratio = towers[i].signal / total;
        longitude += towers[i].longitude * ratio;
        latitude += towers[i].latitude * ratio;
    }

    return { longitude: longitude, latitude: latitude };
}
