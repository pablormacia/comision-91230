import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI5Nur_ghkqXVULzLtGxmyGWdmn91K6-Q",
  authDomain: "taskflow-91230.firebaseapp.com",
  projectId: "taskflow-91230",
  storageBucket: "taskflow-91230.firebasestorage.app",
  messagingSenderId: "92066779523",
  appId: "1:92066779523:web:ef50ac156af229b98c26b6"
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]

export const auth = getAuth(app)

export const db = getFirestore(app)

export default app