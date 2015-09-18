/* jquery.findyourcandidate.ca
 * =====================
 *
 * Extends and overrides the jQuery.findYourRep plugin built by Dan Drinkard to
 * render a find-your-reps form into a target HTML element using the Open North
 * Represent API.
 *
 * Copyright 2014 Open North Inc. BSD3 License.
 *
 * Usage:
 * ------
 *
 * Create an HTML element to use as a target, and call findYourRep(options) on it.
 * This example shows the default options.
 *
 * ```javascript
 * $('.mytarget').findYourRep({
 *   apis: 'represent',
 *   title: 'The Title of your Widget',
 *   text: 'Enter your address to see who represents you.',
 *   action: 'Go!'
 * });
 * ```
 */
;(function(window){

$.findYourRep.represent = function(address) {
  var dfd = new $.Deferred(),
      url = "https://represent.opennorth.ca/candidates/?limit=0&callback=?",
      params = {};

  $.findYourRep.geocodeOrResolveImmediately(address).done(function(geocoded){
    params.point = geocoded.latitude + ',' + geocoded.longitude;
    $.findYourRep.apiCall(url, params).done(function(data){
        dfd.then(function(data) {
            $('.fyr-results h3').append($.findYourRep.render($.findYourRep.districtTemplate,
                $.findYourRep.getTemplateContext(data[0], {})));
        });
      dfd.resolve(data['objects']);
    });
  });
  return dfd;
};

$.findYourRep.getTemplateContext = function(rep, api){
  return {
    details: rep.elected_office,
    photoUrl: rep.photo_url,
    resultUrl: rep.url || rep.source_url,
    name: rep.name,
    district_name: rep.district_name,
    elected_office: rep.elected_office,
    source_url: rep.source_url,
    party_name: rep.party_name,
    email: rep.email,
    url: rep.url
  };
}

$.findYourRep.districtTemplate = "Your Candidates for {{ district_name }}";

$.findYourRep.formTemplate = "" +
  "<div class='find-your-rep fyr-container' id='fyr{{ idx }}' data-apis='{{ apis }}'>" +
    "<h3>{{ title }}</h3>" +
    "<p>{{ text }}</p>" +
    "<div class='fyr-controls'>" +
      "<textarea placeholder='Enter your address'>{{ defaultValue }}</textarea>" +
      "<button class='fyr-submit'>{{ action }}</button>" +
      "</div>" +
      "<small>Powered by <a href='https://represent.opennorth.ca/'>Represent</a></small>" +
  "</div>";

$.findYourRep.resultsTemplate = "" +
"<div class='fyr-results'>" +
  "<h3></h3>" +
  "<div class='fyr-represent cf' style='display:none;'>" +
    "<ul class='fyr-reps'></ul>" +
  "</div>" +
  "<a href='#' class='fyr-back'>&laquo; start over</a>" +
  "<small>Powered by <a href='https://represent.opennorth.ca/'>Represent</a></small>" +
"</div>";

$.findYourRep.resultTemplate = "" +
  "<li class='fyr-rep cf'>" +
    "<a href='{{ resultUrl }}' target='_top'>" +
    "<img src='{{ photoUrl }}' alt='photo of'>" +
    "<h4>{{ name }}</h4>" +
    "<p class='fyr-details'>{{ party_name }} {{ details }}</p>" +
    "</a>" +
  "</li>";

})(this);
