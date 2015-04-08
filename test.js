/*jshint node:true*/
'use strict';

var test = require('tape');
var cellTri = require('./index.js');

var towers = [
{
	latitude: -25.868423,
	longitude: 28.189260450000006,
	signal: -82
},
{
	latitude: -25.8616442888889,
	longitude: 28.195777477777824,
	signal: -85
},
{
	latitude: -25.8663650111111,
	longitude: 28.19577164444445,
	signal: -90
},
{
	latitude: -25.8583868203475,
	longitude: 28.189013391625167,
	signal: -91
},
{
	latitude: -25.8583868203475,
	longitude: 28.1890133916252,
	signal: -93
},
{
	latitude: -25.8583868203475,
	longitude: 28.1890133916252,
	signal: -94
},
{
	latitude: -25.87912,
	longitude: 28.18255,
	signal: -99
}];

test('#cellTowerTriangulation',function(t){
  t.plan(1);
  t.deepEqual(cellTri(towers),{ latitude: -25.86449166815798, longitude: 28.18990230817495 });
});
