import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkZ8X8Y8Y8Y8Y8Y8Y8Y8Y8Y8Y8Y8Y8Y8",
  authDomain: "vitrindeyiz.firebaseapp.com",
  projectId: "vitrindeyiz",
  storageBucket: "vitrindeyiz.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
