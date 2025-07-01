import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZCJXp6usC2hLsbkRatA4LKzBDNle7ghg",
  authDomain: "sagar-dev-auth-app.firebaseapp.com",
  projectId: "sagar-dev-auth-app",
  storageBucket: "sagar-dev-auth-app.firebasestorage.app",
  messagingSenderId: "561437230661",
  appId: "1:561437230661:web:dc8127ecb64ac75c79c52c",
  measurementId: "G-LEXMQF31N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };