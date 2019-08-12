'use strict';

//fallback ready document
function readyDoc(fn) {
  var d = document;
  d.readyState == 'loading' ? d.addEventListener('DOMContentLoaded', fn) : fn();
}

readyDoc(function () {
  // Home page hero carousel
  if (document.getElementsByClassName("home-hero-slider")[0]) {
    var offersSlider = tns({
      "container": '.home-hero-slider__inner',
      "items": 1,
      "slideBy": "page",
      "mouseDrag": true,
      "swipeAngle": false,
      "speed": 400,
      "nav": false,
      "edgePadding": "30%",
      "prevButton": "#homeSliderPrev",
      "nextButton": "#homeSliderNext",
      "responsive": {
        "768": {
          "items": 1.5,
          "slideBy": 1
        }
      }
    });
  }
});
