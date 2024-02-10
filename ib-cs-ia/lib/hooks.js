/*
 * This file contains a custom React hook: useUserData.
 * It imports the necessary React functions, the useAuthState hook from react-firebase-hooks/auth, and the auth and firestore objects from firebase.js.
 *
 * useUserData is a hook that manages the user's authentication state and user profile data.
 * It uses the useAuthState hook to get the user's authentication state.
 * It maintains state for the username and a loading state.
 * It uses the useEffect hook to set up a real-time subscription to the user's document in the Firestore database.
 * When the user's document changes, it updates the username state and sets the loading state to false.
 * When the user logs out, it sets the username state to null and the loading state to false.
 * It returns an object with the user, username, and loading state.
 */
import { auth, firestore } from '../lib/firebase';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
        setLoading(false);
      });
    } else {
      setUsername(null);
      setLoading(false);
    }

    return unsubscribe;
  }, [user]);

  return { user, username, loading };
}