/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\n// importing the map with style\r\nmapboxgl.accessToken = 'pk.eyJ1IjoiamVuc3dpbGwiLCJhIjoiY2t1ejgxem9rM2dvajJ2cXJ1OGZjdGxrMCJ9.aoBP_WJJY4s28m07ieP6WQ';\r\nconst map = new mapboxgl.Map({\r\n    container: 'map',\r\n    style: 'mapbox://styles/mapbox/streets-v11',\r\n    center: [5, 50],\r\n    zoom: 6\r\n});\r\n\r\n// markers style \r\nmap.on('load', () => {\r\n\r\n    //importing the markers from the backend\r\n    fetch(`http://localhost:3000/api/markers`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            map.loadImage(\r\n\r\n                '../images/poppy_icon.png',\r\n\r\n                (error, image) => {\r\n                    if (error) throw error;\r\n                    map.addImage('poppy', image);\r\n                    //console.log(data);\r\n                    // Add the data source containing one point feature.\r\n                    map.addSource('places', {\r\n                        'type': 'geojson',\r\n                        'data': {\r\n                            'type': 'FeatureCollection',\r\n                            'features': data,\r\n                        }\r\n                    })\r\n\r\n                    map.addLayer({\r\n                        'id': 'places',\r\n                        'type': 'symbol',\r\n                        'source': 'places',\r\n                        'layout': {\r\n                            'icon-image': 'poppy',\r\n                            'icon-size': 0.1,\r\n                            'icon-allow-overlap': true\r\n                        }\r\n                    });\r\n                });\r\n        });\r\n\r\n    // markers on click \r\n    map.on('click', 'places', (e) => {\r\n        // Copy coordinates array.\r\n        const coordinates = e.features[0].geometry.coordinates.slice();\r\n        const description = e.features[0].properties.description;\r\n\r\n\r\n        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\r\n            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\r\n        }\r\n\r\n        //popup of the marker , details and placement\r\n        new mapboxgl.Popup()\r\n            .setLngLat(coordinates)\r\n            .setHTML(`  ${description} `)\r\n            .addTo(map);\r\n    });\r\n\r\n    // Change the cursor to a pointer when the mouse is over the popup\r\n    map.on('mouseenter', 'places', () => {\r\n        map.getCanvas().style.cursor = 'pointer';\r\n    });\r\n\r\n    // Change it back to a pointer when it leaves.\r\n    map.on('mouseleave', 'places', () => {\r\n        map.getCanvas().style.cursor = '';\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack://hoofdopdracht/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;