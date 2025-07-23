// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwkf0fJdHIRiYdbFlL02GtJiezOqO2AsY",
  authDomain: "calmify-78f64.firebaseapp.com",
  projectId: "calmify-78f64",
  storageBucket: "calmify-78f64.firebasestorage.app",
  messagingSenderId: "546916694105",
  appId: "1:546916694105:web:8865a4d92c5d4a79901948"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
