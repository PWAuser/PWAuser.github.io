'use strict';
(function() {
    document.getElementById("helloMessage").
    innerHTML = "Welcome to the out of scope navigation Demo page.";
    
    //var start_btn = $('#btn_start_demo');
    var start_btn = document.getElementById("btn_start_demo");
    start_btn.addEventListener('click', function(e) {
      console.log('start_btn clicked');
      //window.scrollTo(0,1); this doesn't work
      //document.body.requestFullscreen();
      toggleFullScreen();
    }, false);

    function toggleFullScreen() {
      var doc = window.document;
      var docEl = doc.documentElement;

      var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
      }
      else {
        cancelFullScreen.call(doc);
      }
    }

}());