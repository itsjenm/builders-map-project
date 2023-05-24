// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWaJf5-K30TOiZTzDExwWy0dEJkaCFt6s",
    authDomain: "books-58f52.firebaseapp.com",
    projectId: "books-58f52",
    storageBucket: "books-58f52.appspot.com",
    messagingSenderId: "800477955885",
    appId: "1:800477955885:web:c5aef24c8fa3d6a1c135a4",
    measurementId: "G-5PKP66FT3S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();