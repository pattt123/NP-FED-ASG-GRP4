import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { FIREBASECONFIG } from "../env.js";

const firebaseApp = initializeApp(FIREBASECONFIG);
export const Database = getDatabase(firebaseApp);
