import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDigQuUDthM_DGzYE8Ntaa4JUALoDWmCRI",
  authDomain: "jdmlplanner.firebaseapp.com",
  databaseURL: "https://jdmlplanner-default-rtdb.firebaseio.com",
  projectId: "jdmlplanner",
  storageBucket: "jdmlplanner.firebasestorage.app",
  messagingSenderId: "628192894695",
  appId: "1:628192894695:web:423ba39bffd4fd54d98c42",
  measurementId: "G-1TNRSY19NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const firebaseServices = {app, auth, db};

export default firebaseServices;
