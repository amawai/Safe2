/*
*  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

//  This code is adapted from
//  https:// rawgit.com/Miguelao/demos/master/mediarecorder.html

/* globals MediaRecorder */
import firebase from 'firebase'

const mediaSource = new MediaSource()
mediaSource.addEventListener('sourceopen', handleSourceOpen, false)
var mediaRecorder
var recordedBlobs
var sourceBuffer

var recordButton = document.querySelector('button#record')
recordButton.onclick = toggleRecording
// playButton.onclick = play
// downloadButton.onclick = download

//  window.isSecureContext could be used for Chrome
var isSecureOrigin = window.location.protocol === 'https:' ||
window.location.hostname === 'localhost'
if (!isSecureOrigin) {
  window.alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
    '\n\nChanging protocol to HTTPS')
  window.location.protocol = 'HTTPS'
}

var constraints = {
  audio: true,
  video: false
}

function handleSuccess (stream) {
  recordButton.disabled = false
  console.log('getUserMedia() got stream: ', stream)
  window.stream = stream
  if (window.URL) {
    // gumVideo.src = window.URL.createObjectURL(stream)
  } else {
    // gumVideo.src = stream
  }
}

function handleError (error) {
  console.log('navigator.getUserMedia error: ', error)
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError)

function handleSourceOpen (event) {
  console.log('MediaSource opened')
  sourceBuffer = mediaSource.addSourceBuffer('audio/wav')
  console.log('Source buffer: ', sourceBuffer)
}

/*
recordedVideo.addEventListener('error', function(ev) {
  console.error('MediaRecording.recordedMedia.error()')
  alert('Your browser can not play\n\n' + recordedVideo.src
    + '\n\n media clip. event: ' + JSON.stringify(ev))
}, true)
*/

function handleDataAvailable (event) {
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data)
  }
}

function handleStop (event) {
  console.log('Recorder stopped: ', event)
}

function toggleRecording () {
  if (recordButton.textContent === 'Start Recording') {
    startRecording()
  } else {
    stopRecording()
    recordButton.textContent = 'Start Recording'
    // playButton.disabled = false
    // downloadButton.disabled = false
  }
}

function startRecording () {
  recordedBlobs = []
  var options = { mimeType: 'audio/wav' }
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.log(options.mimeType + ' is not Supported')
    options = { mimeType: 'audio/wav' }
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.log(options.mimeType + ' is not Supported')
      options = { mimeType: 'video/webm' }
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported')
        options = { mimeType: '' }
      }
    }
  }
  try {
    mediaRecorder = new MediaRecorder(window.stream, options)
  } catch (e) {
    console.error('Exception while creating MediaRecorder: ' + e)
    window.alert('Exception while creating MediaRecorder: ' + e + '. mimeType: ' + options.mimeType)
    return
  }
  console.log('Created MediaRecorder', mediaRecorder, 'with options', options)
  recordButton.textContent = 'Stop Recording'
  // playButton.disabled = true
  // downloadButton.disabled = true
  mediaRecorder.onstop = handleStop
  mediaRecorder.ondataavailable = handleDataAvailable
  mediaRecorder.start(10) //  collect 10ms of data
  console.log('MediaRecorder started', mediaRecorder)
}

/*
function play() {
  var superBuffer = new Blob(recordedBlobs, {type: 'audio/wav'})
  recordedVideo.src = window.URL.createObjectURL(superBuffer)
}
*/

function stopRecording () {
  mediaRecorder.stop()
  console.log('Recorded Blobs: ', recordedBlobs)
  // recordedVideo.controls = true

  var blob = new Blob(recordedBlobs, { type: 'audio/wav' })
  var url = window.URL.createObjectURL(blob)
  var a = document.createElement('a')
  a.style.display = 'none'
  a.href = url

  function generateUID () {
    return '_' + Math.random().toString(36).substr(2, 9)
  }

  var fileName = generateUID()

  console.log(fileName)

  // a.download = fileName + '.wav'

  /*
  document.body.appendChild(a)
  a.click()
  setTimeout(function() {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 100)
  */

  var config = {
    apiKey: 'AIzaSyAUmzM1srcqlBsTPx-OiORf2d2pihBoU58',
    authDomain: 'hackaton-1.firebaseapp.com',
    databaseURL: 'https:// hackaton-1.firebaseio.com',
    storageBucket: 'hackaton-1.appspot.com',
    messagingSenderId: '1082056479634'
  }
  firebase.initializeApp(config)

  var storage = firebase.storage()
  var space = storage.ref().child('words')

  var task = space.child(fileName).put(blob)
  task.on('state_changed',
    function () {},
    function (e) { window.alert(e) },
    function () { console.log(task.snapshot.downloadURL) }
  )
}

export { startRecording, stopRecording }
