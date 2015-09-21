# Find Your Next Representative Widget: Canada


## Nerdy Overview

A basic jQuery plugin that renders a form into the specified target, geocoding input (or geolocating the user) and displaying results from [Open North](http://opennorth.ca/)'s [Represent API](https://represent.opennorth.ca/).

The form and the result listing are designed to be mobile-first and responsive, so they should integrate well into mobile-friendly sites.

## Credits

This plugin extends and reuses code from the [Sunlight Foundation](https://sunlightfoundation.com/)'s [jQuery Find-Your-Rep](https://github.com/sunlightlabs/jquery-findyourrep) plugin and is based entirely on the existing [Open North "Find your rep" widget](https://github.com/opennorth/jquery-findyourrep-ca). It has been updated to display Candidates for the upcoming 2015 Canadian federal election and to work well on mobile devices.

* [Open North](http://www.opennorth.ca/) provide the [candidate data](http://represent.opennorth.ca/)
* [Tyee Solutions Society](http://www.tyeesolutions.org/) provided updates to the candidates contact information, specifically reporter Jes Hovanes
* [Sally Poulsen](https://github.com/kidcompassion) led the charge and the updated visual style
* [Phillip Smith](https://github.com/phillipadsmith) provided updates to the Open North plugin

## Show me the demo!

Try the [demo](http://thetyee.github.io/jquery-findyournextrep-ca/) (a good test address is `A1A1A1` for St. John's, NL). 

The full example code (without the automatic user location lookup) is:

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Find Your Candidate example</title>
        <link rel="stylesheet" href="https://cdn.rawgit.com/TheTyee/jquery-findyournextrep-ca/release/v1.0.0/dist/css/jquery.findyournextrep.min.css" />
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.2/handlebars.js"></script>
        <script src="https://cdn.rawgit.com/TheTyee/jquery-findyournextrep-ca/release/v1.0.0/dist/js/jquery.findyourrep-pack.min.js"></script>
        <script src="https://cdn.rawgit.com/TheTyee/jquery-findyournextrep-ca/release/v1.0.0/dist/js/jquery.findyourcandidate.ca.min.js"></script>
    </head>
    <body>
        <script>
            $('body').append('<div class="fyr"></div>')
            .find('div.fyr')
            .findYourRep({
                 apis: 'represent',
                 title: 'Find federal candidates in your riding',
                 text: 'Enter your address or postal code to see who might represent you.',
                 action: 'Go!'
            });
        // 
        </script>
    </body>
</html>
```

If you'd like to offer the user the opportunity to locate themselves using their browser's geolocation service, you can add this to the script tag (this is running in the demo linked above):

```
        if (navigator.geolocation) {
            var geocoder = new google.maps.Geocoder();
            $('.fyr-container label').append('<span class="geolocate"> Or <a href="#" id="geolocate">click here</a> and we can try to find you automatically</span>');
            $('#geolocate').click(function (e) {
                e.preventDefault();
                $('.fyr > textarea').val('Looking up your location... please wait');
                $('.fyr > textarea').prop( "disabled", true );
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocateLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                    geocoder.geocode({'latLng': geolocateLatLng},
                                     function(results, status) {
                                         $('.fyr >  textarea').val(results[0].formatted_address);
                                         $('button.fyr-submit').trigger('click');
                                     });
                });
            });
        }
```

## Usage

1. Link the JavaScript scripts and CSS per above, either using the provided CDN links above, or the versions provided by this package.
1. Call `findYourRep({apis: 'represent'})` on an element, as well as options to indicate to the user that this is for candidates only:

```javascript
    $('.myDiv').findYourRep({
        apis: 'represent',
        title: 'Find Your Candidates',
        text: 'Enter your address or postal code to see who might represent you.',
        action: 'Go!'
    });
```

For further documentation, see the [jQuery Find-Your-Rep](https://github.com/sunlightlabs/jquery-findyourrep#readme) plugin.

Copyright (c) 2015 Open North Inc., released under the BSD3 license
