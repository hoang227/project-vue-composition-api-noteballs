import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
    }
  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        console.log('log', user);
      }).catch((error) => {
        console.log(error.message)
      });
    }
  },

})