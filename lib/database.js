import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { FIREBASECONFIG } from "../env.js";

const firebaseApp = initializeApp(FIREBASECONFIG);
export const Database = getFirestore(firebaseApp);
