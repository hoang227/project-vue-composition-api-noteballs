import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { createUserWithEmailAndPassword, signOut, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    init() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
        } else {
          this.user = {}
        }
      })
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
      }).catch((error) => {
        console.log(error.message)
      })
    },
    loginUser(credentials) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
      }).catch((error) => {
        console.log(error.message)
      })
    },
    logoutUser() {
      const auth = getAuth()
      signOut(auth).then(() => {
      }).catch((error) => {
        console.log(error.message)
      })
    }
  },

})