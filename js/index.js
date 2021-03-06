(function() {
  var hover_layer, jumpTo, locations, map, out, over;

  L.mapbox.accessToken = 'pk.eyJ1IjoiYWxwaGEtYmV0YS1zb3VwIiwiYSI6ImxMaVFfVTAifQ.VD93-nQ8FuT4VsPyh8LbBw';

  map = L.mapbox.map('mapbox', 'mapbox.streets');

  map.setView([50.7340, 7.0998], 12);

  map.addControl(L.mapbox.geocoderControl('mapbox.places'));

  hover_layer = L.mapbox.tileLayer('mapbox.satellite');

  hover_layer.setOpacity(1);

  over = function() {
    map.addLayer(hover_layer);
    return hover_layer.setOpacity(0.6);
  };

  out = function() {
    map.removeLayer(hover_layer);
    return hover_layer.setOpacity(1);
  };

  $('#mapbox').hover(over, out);

  locations = {
    "holy-trinity": {
      "zoom": 19,
      "coordinates": [-43.5264, 172.659]
    },
    "bonn": {
      "zoom": 12,
      "coordinates": [50.7340, 7.0998]
    },
    "cologne": {
      "zoom": 12,
      "coordinates": [50.9364, 6.9528]
    },
    "rfwu": {
      "zoom": 17,
      "coordinates": [50.7265, 7.0914]
    },
    "frankfurt": {
      "zoom": 12,
      "coordinates": [50.1167, 8.6833]
    },
    "nz": {
      "zoom": 5,
      "coordinates": [-41.28, 173.20]
    },
    "esslingen": {
      "zoom": 13,
      "coordinates": [48.7333, 9.3167]
    },
    "auckland": {
      "zoom": 13,
      "coordinates": [-36.8406, 174.76]
    },
    "nelson": {
      "zoom": 14,
      "coordinates": [-41.2708, 173.2839]
    },
    "nelson-west": {
      "zoom": 9,
      "coordinates": [-40.8968, 172.5785]
    },
    "drury": {
      "zoom": 13,
      "coordinates": [-37.1, 174.95]
    },
    "waikato-river": {
      "zoom": 11,
      "coordinates": [-37.471891, 175.147781]
    },
    "waikato": {
      "zoom": 8,
      "coordinates": [-37.7833, 175.2833]
    },
    "canterbury": {
      "zoom": 8,
      "coordinates": [-43.4833, 171.9667]
    },
    "canterbury-zoom": {
      "zoom": 11,
      "coordinates": [-43.4833, 171.9667]
    },
    "coromandel": {
      "zoom": 12,
      "coordinates": [-36.7667, 175.5000]
    },
    "shakespeare-bay": {
      "zoom": 15,
      "coordinates": [-41.27, 174]
    },
    "picton": {
      "zoom": 14,
      "coordinates": [-41.2833, 174.0000]
    },
    "grey-river": {
      "zoom": 9,
      "coordinates": [-42.3987457, 171.5678497]
    },
    "denniston": {
      "zoom": 15,
      "coordinates": [-41.7333, 171.8]
    },
    "buller-river": {
      "zoom": 11,
      "coordinates": [-41.7950738, 171.7194433]
    },
    "westport": {
      "zoom": 13,
      "coordinates": [-41.75, 171.6128273]
    },
    "westland": {
      "zoom": 8,
      "coordinates": [-42.7193047, 170.9591718]
    },
    "lyttleton-tunnel": {
      "zoom": 14,
      "coordinates": [-43.594417, 172.71]
    },
    "canterbury-council": {
      "zoom": 17,
      "coordinates": [-43.5307613, 172.6335298]
    },
    "rangitata-river-headwaters": {
      "zoom": 11,
      "coordinates": [-43.4731529, 170.714842]
    },
    "mt-cook": {
      "zoom": 11,
      "coordinates": [-43.5947944, 170.0715773]
    },
    "kowai": {
      "zoom": 12,
      "coordinates": [-43.2608, 172.6444]
    },
    "haast-pass": {
      "zoom": 10,
      "coordinates": [-44.0999656, 169.3324475]
    },
    "southern-alps": {
      "zoom": 9,
      "coordinates": [-43.4995261, 170.3595752]
    },
    "franz-josef-glacier": {
      "zoom": 13,
      "coordinates": [-43.4600403, 170.2]
    },
    "austria": {
      "zoom": 6,
      "coordinates": [47.6782139, 13]
    },
    "dusseldorf": {
      "zoom": 13,
      "coordinates": [51.2247433, 6.776643]
    },
    "university-tubingen": {
      "zoom": 15,
      "coordinates": [48.5308025, 9.03653]
    },
    "st-marys-heathcote": {
      "zoom": 21,
      "coordinates": [-43.5759124, 172.706854]
    },
    "glenmark": {
      "zoom": 15,
      "coordinates": [-43.0543215, 172.7555298]
    },
    "canterbury-museum": {
      "zoom": 18,
      "coordinates": [-43.5308638, 172.6265052]
    },
    "uc": {
      "zoom": 16,
      "coordinates": [-43.5235336, 172.5817293]
    },
    "vuw": {
      "zoom": 19,
      "coordinates": [-41.2880906, 174.7687253]
    },
    "rgs": {
      "zoom": 18,
      "coordinates": [51.5012715, -0.1769701]
    },
    "cambridge-university": {
      "zoom": 16,
      "coordinates": [52.2042699, 0.1127145]
    },
    "haast": {
      "zoom": 13,
      "coordinates": [-43.8809091, 169.0387527]
    },
    "haast-bridge": {
      "zoom": 16,
      "coordinates": [-43.8555061, 169.04861]
    },
    "london-to-auckland": {
      "zoom": 1,
      "coordinates": [0, 90]
    }
  };

  jumpTo = function(position, zoom) {
    return map.setView(position, zoom, {
      pan: {
        animate: true,
        duration: 3
      },
      zoom: {
        animate: true,
        duration: 3
      }
    });
  };

  $('.location').hover(function() {
    var c, loc, z;
    loc = $(this).attr('data-name');
    c = locations[loc]["coordinates"];
    z = locations[loc]["zoom"];
    return jumpTo(c, z);
  });

}).call(this);