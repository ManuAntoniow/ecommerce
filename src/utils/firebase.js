import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDtNRSWsTjvDVJUB4hrmQZJqCESiZpH6Ok",
    authDomain: "lego-ecommerce-bb63d.firebaseapp.com",
    projectId: "lego-ecommerce-bb63d",
    storageBucket: "lego-ecommerce-bb63d.appspot.com",
    messagingSenderId: "984603660695",
    appId: "1:984603660695:web:ed7987ccee88a21e1134d2"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)