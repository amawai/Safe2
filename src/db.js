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

const trainingsRef = db.ref().child('trainings')

const addTraining = userId =>
    trainingsRef.push({
      userId,
      state: 'recording',
      count: 0
    })

export { login, logout, addTraining }
