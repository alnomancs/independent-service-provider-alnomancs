// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVyAak9kPTt6Jp_gaDUOdzIm2hw9mpN-0",
  authDomain: "independent-service-prov-1ed2a.firebaseapp.com",
  projectId: "independent-service-prov-1ed2a",
  storageBucket: "independent-service-prov-1ed2a.appspot.com",
  messagingSenderId: "38573381664",
  appId: "1:38573381664:web:2a7ba67a15bafe78ffc445",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
