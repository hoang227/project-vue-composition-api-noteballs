import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB6QS-CtvJhwM6eWGrLiV-PF8E6fb8yRus',
  authDomain: 'noteballs-d971d.firebaseapp.com',
  projectId: 'noteballs-d971d',
  storageBucket: 'noteballs-d971d.appspot.com',
  messagingSenderId: '109607199216',
  appId: '1:109607199216:web:d9d8758528c9c8fead7d35'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }