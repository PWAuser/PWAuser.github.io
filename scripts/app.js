
'use strict';
(function() {
  document.getElementById("helloMessage").
    innerHTML = "This is a Demo page.";

  var WS = null
  WS = new WebSocket('ws://localhost:13579');
    WS.onopen = function(event) {
      WS.onmessage = function(event) {
        //we dont care any message the android server send to use
        console.log('WS socket recieved message',event);
      };

      WS.onclose = function(event) {
        console.log('WS socket has closed',event);
      };
    }
  var start_btn = $('#btn_start_demo');
  start_btn.click(function(e) {
      console.log('start_btn clicked');
      WS.send('opc');
      navigator.geolocation.getCurrentPosition(handleLocation);
      //WS.send('')
      //navigator.mediaDevices.getUserMedia({video: true}).then(handleSuccess);
  });
  function handleLocation(position) {
    WS.send('cpc')
  }
/*
var player = document.getElementById('player'); 
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var videoTracks;

var handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);

  // Stop all video streams.
  videoTracks.forEach(function(track) {track.stop()});
});


navigator.mediaDevices.getUserMedia({video: true})
    .then(handleSuccess);
*/
  /*
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
  */
  /*
  navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state == 'granted') {
    document.getElementById("permission_state").
    innerHTML = "granted!";
  } else if (result.state == 'prompt') {
    document.getElementById("permission_state").
    innerHTML = "prompt";
  } else {
    document.getElementById("permission_state").
    innerHTML = "Denied";
  }
  });
  
  function showMap(position) {
  // Show a map centered at (position.coords.latitude, position.coords.longitude).
    WS.send('cpc')
    document.getElementById("user_location").
    innerHTML = position.coords.latitude + ":" + position.coords.longitude;
  }

  //navigator.geolocation.getCurrentPosition(showMap);
  document.getElementById("helloMessage").
    innerHTML = "cccc";
  */
  // TODO add service worker code here
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }

}());
