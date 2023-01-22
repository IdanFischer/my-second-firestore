// import firebase-admin library
// connect to firebase project
// once connected, connect to firestore
// create new document 

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import { service_account } from "./secrets.js";

// inserting an object into the function and giving it a key and value
initializeApp(  { credential: cert(service_account)}  ); 

const db = getFirestore();

const animal = {
    type: "dog",
    breed: "GS and GR",
    gender: "f",
    dogName: "Zoey",
    legs: 4,
    soCute: true
}

db.collection("zoo")
.add(animal)
.then(doc => console.log("Animal Added ---->", doc.id))
.catch(console.error)
