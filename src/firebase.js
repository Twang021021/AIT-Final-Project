// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjt7_8Mr-anh38ohWeGcktBizeO33GuU",
  authDomain: "reminder-app-37b93.firebaseapp.com",
  projectId: "reminder-app-37b93",
  storageBucket: "reminder-app-37b93.firebasestorage.app",
  messagingSenderId: "654956554530",
  appId: "1:654956554530:web:54cbaf877c818cce2a1d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Connect to Firestore and export it
const db = getFirestore(app);
export default db;
