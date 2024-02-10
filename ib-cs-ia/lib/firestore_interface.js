/*
 * This file contains several functions that interact with the Firestore database.
 * It imports the necessary Firestore functions from firebase/firestore and the firestore object from firebase.js.
 *
 * getUser is a function that takes a user's uid, retrieves the user's data from the Firestore database, and returns the data.
 * If the user does not exist, it logs a message to the console.
 *
 * updateUser is a function that takes a user's uid and an object of updates, and applies the updates to the user's document in the Firestore database.
 *
 * getUserWithUsername is a function that takes a username, queries the Firestore database for a user with that username, and returns the user's document.
 */
import { firestore } from "./firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function getUser(uid) {
  const docRef = doc(firestore, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such user!");
  }
}

export async function updateUser(uid, updates) {
  const docRef = doc(firestore, "users", uid);
  await updateDoc(docRef, updates);
}

export async function getUserWithUsername(username) {
	const usersRef = firestore.collection('users');
	const query = usersRef.where('username', '==', username).limit(1);
	const userDoc = (await query.get()).docs[0];
	return userDoc;
}