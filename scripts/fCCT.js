'use strict';
(function() {
    document.getElementById("helloMessage").
    innerHTML = "Welcome to the out of scope navigation Demo page.";
    
    //var start_btn = $('#btn_start_demo');
    var start_btn = document.getElementById("btn_start_demo");
    start_btn.addEventListener('click', function(e) {
      console.log('start_btn clicked');
      //window.scrollTo(0,1); this doesn't work
      document.body.requestFullscreen();
    }, false);
}());