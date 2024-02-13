import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { createUserWithEmailAndPassword, signOut, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
    }
  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        console.log('register', user)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    loginUser(credentials) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        console.log('login', user)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    logoutUser() {
      const auth = getAuth()
      signOut(auth).then(() => {
        console.log('user signed out')
      }).catch((error) => {
        console.log(error.message)
      })
    }
  },

})