import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQguB4pIfyeAKz_HZndwW7VSJBjioEpdg",
  authDomain: "chat-vue-firebase-c24d4.firebaseapp.com",
  databaseURL:
    "https://chat-vue-firebase-c24d4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-vue-firebase-c24d4",
  storageBucket: "chat-vue-firebase-c24d4.appspot.com",
  messagingSenderId: "75629730032",
  appId: "1:75629730032:web:e4931fd9772a3246808a35",
};

const app = initializeApp(firebaseConfig);

export default app;
