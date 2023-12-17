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
	return userDoc.data();
}

