// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDtatqaHJHHxtCg-JTkSGaJWYEw18rG5WI',
  authDomain: 'twitter-clone-975a9.firebaseapp.com',
  projectId: 'twitter-clone-975a9',
  storageBucket: 'twitter-clone-975a9.appspot.com',
  messagingSenderId: '884513002813',
  appId: '1:884513002813:web:36a8273865d3ce406a2154',
  measurementId: 'G-LMCZ613SVF',
}

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig)

// Use these for db & auth
const db = getFirestore(firebaseApp)

export default db
