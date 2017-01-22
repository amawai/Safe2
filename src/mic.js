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

const constraints = {
  audio: true,
  video: false
}

const generateUID = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export default class {
  constructor () {
    const isSecureOrigin = window.location.protocol === 'https:' ||
    window.location.hostname === 'localhost'
    if (!isSecureOrigin) {
      window.alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
        '\n\nChanging protocol to HTTPS')
      window.location.protocol = 'HTTPS'
    }
  }

  init () {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        console.log('getUserMedia() got stream: ', stream)
        this.stream = stream
        resolve()
      })
      .catch(error => {
        console.log('navigator.getUserMedia error: ', error)
        reject()
      })
    })
  }

  start () {
    return new Promise((resolve, reject) => {
      this.recordedBlobs = []
      try {
        this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: 'audio/webm' })
      } catch (e) {
        console.error('Exception while creating MediaRecorder (audio/wav): ' + e)
        reject(e)
      }
      console.log('Created MediaRecorder with wav')
      this.mediaRecorder.onstop = () => {
        console.log('Record stopped')
      }
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data)
        }
      }
      this.mediaRecorder.start(10) //  collect 10ms of data
      console.log('MediaRecorder started', this.mediaRecorder)
      resolve()
    })
  }
  stop () {
    return new Promise((resolve, reject) => {
      this.mediaRecorder.stop()
      const blob = new Blob(this.recordedBlobs, { type: 'audio/wav' })
      const storage = firebase.storage()
      const space = storage.ref().child('words')
      const fileName = generateUID()
      let uid = (this.user) ? this.user.user.uid : ''
      let fullData = [blob, uid]
      const task = space.child(fileName).put(blob)
      task.on('state_changed',
        function () {},
        (e) => { reject(e) },
        () => { resolve(task.snapshot.downloadURL) }
      )
    })
  }
}
