'use strict';
(function() {
    document.getElementById("helloMessage").
    innerHTML = "Welcome to the Demo page.";
    
    var start_btn = $('#btn_start_demo');
    start_btn.click(function(e) {
      console.log('start_btn clicked');
      window.scrollTo(0,1);
      //document.body.requestFullscreen(['hide']);
    });
}());