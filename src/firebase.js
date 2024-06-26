
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjt7aM7xMv2tz2a8FMlqO-k3j03tubhgw",
  authDomain: "react-bibek-portfolio.firebaseapp.com",
  projectId: "react-bibek-portfolio",
  storageBucket: "react-bibek-portfolio.appspot.com",
  messagingSenderId: "525050475912",
  appId: "1:525050475912:web:a7e4e8766b23b53441763d",
  measurementId: "G-5RSDPRD48C",
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()
