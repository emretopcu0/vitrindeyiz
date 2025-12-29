import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWP3iSziG-yi64-2jS6fLKOsDQGOtn_68",
  authDomain: "vitrindeyiz-d93c4.firebaseapp.com",
  projectId: "vitrindeyiz-d93c4",
  storageBucket: "vitrindeyiz-d93c4.firebasestorage.app",
  messagingSenderId: "343940831562",
  appId: "1:343940831562:web:dc7e2162030279dbf2c9b3",
  measurementId: "G-FYRYVBRJ93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
