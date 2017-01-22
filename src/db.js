import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBUBlF_4lvilWfHXRDv2x5uUx_l71zZ3MU',
  authDomain: 'conuhacks2017.firebaseapp.com',
  databaseURL: 'https://conuhacks2017.firebaseio.com',
  storageBucket: 'conuhacks2017.appspot.com',
  messagingSenderId: '411746442942'
}
firebase.initializeApp(config)

const provider = new firebase.auth.FacebookAuthProvider()
const db = firebase.database()

const login = () => {
  return firebase.auth().signInWithPopup(provider)
}

const logout = () => {
  return firebase.auth().signOut()
}

const channelsRef = db.ref().child('channels')

const createChannel = (name) =>
  new Promise((a, r) =>
    channelsRef.push({ name })
    .then(
      (x) => a(x.key),
      r))

const createMessage = (channelKey, author, message) =>
  new Promise((a, r) =>
    channelsRef.child(channelKey).child('message').push({
      author,
      message,
      time: firebase.database.ServerValue.TIMESTAMP
    })
    .then(a, r))

export { login, logout, channelsRef, createChannel, createMessage }
