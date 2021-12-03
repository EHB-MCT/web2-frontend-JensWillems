mapboxgl.accessToken = 'pk.eyJ1IjoiamVuc3dpbGwiLCJhIjoiY2t1ejgxem9rM2dvajJ2cXJ1OGZjdGxrMCJ9.aoBP_WJJY4s28m07ieP6WQ';
// importing the map with style
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [5, 50],
    zoom: 6
});

// markers style 
map.on('load', () => {

    fetch(`http://localhost:3000/api/markers`)
        .then(response => response.json())
        .then(data => {
            map.loadImage(

                './images/poppy_icon.png',

                (error, image) => {
                    if (error) throw error;
                    map.addImage('poppy', image);
                    //console.log(data);
                    // Add a data source containing one point feature.
                    map.addSource('places', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': data,
                        }
                    })

                    map.addLayer({
                        'id': 'places',
                        'type': 'symbol',
                        'source': 'places',
                        'layout': {
                            'icon-image': 'poppy',
                            'icon-size': 0.1,
                            'icon-allow-overlap': true
                        }
                    });
                });
        });

    // markers on click 
    map.on('click', 'places', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<h1> ${description} </h1>`)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
    });

});

// Code for markers https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/