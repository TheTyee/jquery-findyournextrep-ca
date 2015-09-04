# Find Your Next Representative Widget: Canada

A basic jQuery plugin that renders a form into the specified target, geocoding input (or geolocating the user) and displaying results from [Open North](http://opennorth.ca/)'s [Represent API](https://represent.opennorth.ca/).

This plugin extends and reuses code from the [Sunlight Foundation](https://sunlightfoundation.com/)'s [jQuery Find-Your-Rep](https://github.com/sunlightlabs/jquery-findyourrep) plugin.

This plugin is based entirely on the existing [Open North "Find your rep" widget](https://github.com/opennorth/jquery-findyourrep-ca) and has been updated to display Candidates for the upcoming Canadian federal election.

## Example

Try the [demo](http://thetyee.github.io/jquery-findyourcandidate-ca/) (a good test address is `A1A1A1` for St. John's, NL). The full example code (without the automatic user location lookup) is:

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Find Your Candidate example</title>
        <link rel="stylesheet" href="css/jquery.findyourrep.min.css" />
        <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="js/jquery.findyourrep-pack.min.js"></script>
        <script src="js/jquery.findyourcandidate.ca.min.js"></script>
    </head>
    <body>
        <script>
            $('body').append('<div class="fyr"></div>')
            .find('div.fyr')
            .findYourRep({
                apis: 'represent',
                title: 'Find Your Candidates',
                text: 'Enter your address or postal code to see who might represent you.',
                action: 'Go!'
            });
        </script>
    </body>
</html>
```

## Usage

1. Link, in this order:
  1. jQuery
  1. [`dist/js/jquery.findyourrep-pack.min.js`](https://rawgit.com/sunlightlabs/jquery-findyourrep/master/dist/js/jquery.findyourrep-pack.min.js) from jQuery Find-Your-Rep
  1. [`dist/js/jquery.findyourrep.ca.min.js`](https://rawgit.com/opennorth/jquery-findyourrep-ca/master/dist/js/jquery.findyourrep.ca.min.js) from this package
1. Call `findYourRep({apis: 'represent'})` on an element, as well as options to indicate that this is for candidates only:

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
