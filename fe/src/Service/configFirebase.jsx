import { initializeApp } from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBYfhRPZ9WPLSvqNaEkotJYlnciy5itdXE",
    authDomain: "loginsms-c95c7.firebaseapp.com",
    projectId: "loginsms-c95c7",
    storageBucket: "loginsms-c95c7.appspot.com",
    messagingSenderId: "345823343900",
    appId: "1:345823343900:web:14c4cdd7376a6192e3f6d9",
    measurementId: "G-42LT2YQ5MK"
};

const app = initializeApp(firebaseConfig);

export { app };
