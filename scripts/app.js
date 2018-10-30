
'use strict';
(function() {
  document.getElementById("helloMessage").
    innerHTML = "Hello, world!";

  var socket = new WebSocket('ws://localhost:13579');

  socket.onopen = function(event) {
  
    // Send an initial message
    socket.send('I am the client and I\'m listening!');
  
    // Listen for messages
    socket.onmessage = function(event) {
      console.log('Client received a message',event);
      var msg = event.data;
      document.getElementById("SocketMessage").innerHTML = msg;
    };
  
    // Listen for socket closes
    socket.onclose = function(event) {
      console.log('Client notified socket has closed',event);
    };
  
    // To close the socket....
    //socket.close()
  
  };

  navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state == 'granted') {
    document.getElementById("helloMessage").
    innerHTML = "granted, world!";
  } else if (result.state == 'prompt') {
    document.getElementById("helloMessage").
    innerHTML = "prompt, world!";
  } else {
    document.getElementById("helloMessage").
    innerHTML = "Denied, world!";
  }
  });

  function showMap(position) {
  // Show a map centered at (position.coords.latitude, position.coords.longitude).
    document.getElementById("helloMessage").
    innerHTML = position.coords.latitude + ":" + position.coords.longitude;
  }

  navigator.geolocation.getCurrentPosition(showMap);
  document.getElementById("helloMessage").
    innerHTML = "cccc";

  // TODO add service worker code here
  /*
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
  */

}());
