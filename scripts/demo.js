'use strict';
(function() {
    document.getElementById("helloMessage").
    innerHTML = "This is the 2nd Demo page.";
    var WS = null
    WS = new WebSocket('ws://localhost:13580');
    WS.onopen = function(event) {
      WS.onmessage = function(event) {
        //we dont care any message the android server send to use
        console.log('WS socket recieved message',event);
      };

      WS.onclose = function(event) {
        console.log('WS socket has closed',event);
      };
      //We inform the android app to close the whole screen cover first
      WS.send('cwc');
    }
    
    

}());