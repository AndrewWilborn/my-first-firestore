// import firebase-admin library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// import credentials.js
import { creds } from "./creds.js";

// connect to the Firebase project
initializeApp({credential: cert(creds)});

// connect to the Firestore database
const db = getFirestore();

// CRUD
// const banana = {
//     color: 'yellow',
//     cost: 1,
//     type: 'produce'
// }
// const apple = {
//     color: 'red',
//     cost: 1.5,
//     type: 'produce'
// }

// Create
// db.collection("food").add(apple).then(doc => {console.log("added item " + doc.id)}).catch(console.error);

// Read
db.collection("food").get().then(collection => {
    // const table = collection.docs.map(doc => doc.data())
    const table = collection.docs.map(doc => ({...doc.data(), id: doc.id})); // returns table that has ID
    console.table(table);
}).catch(console.error)

