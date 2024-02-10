/*
 * This file contains a single React component: UserProfilePage.
 * It also contains a helper function: NoAnswers.
 *
 * UserProfilePage is a functional component that takes one prop: initialUserData.
 * It uses the UserContext to get the current user and username.
 * It maintains state for the user's data and updates this state when the user's document in the Firestore database changes.
 * It uses the useEffect hook to set up a real-time subscription to the user's document.
 * It returns an AuthCheck component that wraps a UserProfile component and a Subjects component or a NoAnswers component.
 * The UserProfile component is passed the user and a showButton prop.
 * The Subjects component is passed the user's sample data.
 * The NoAnswers component is displayed if the user has not provided any answers.
 *
 * NoAnswers is a functional component that returns a message telling the user to provide their answers to the form.
 *
 * getServerSideProps is a Next.js function that runs on the server before the page is rendered.
 * It takes the username from the query parameters, retrieves the user's data from the Firestore database, and returns this data as a prop to the page component.
 * If the user does not exist, it returns a notFound property, which causes Next.js to render a 404 page.
 */
import UserProfile from "@/components/UserProfile";
import Subjects from "@/components/Subjects";
import { getUserWithUsername } from "@/lib/firestore_interface";
import AuthCheck from "@/components/AuthCheck";
import { firestore } from "../lib/firebase";

import { UserContext } from "@/lib/context";
import React, { useContext, useState, useEffect } from "react";
import Loader from "@/components/Loader";

export async function getServerSideProps({ query }) {
  const { username } = query;
  const userDoc = await getUserWithUsername(username);

  // If no user, short circuit to 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  const initialUserData = userDoc.data();
  return {
    props: { initialUserData }, // will be passed to the page component as props
  };
}

export default function UserProfilePage({ initialUserData }) {
  const [userData, setUserData] = useState(initialUserData);
  const { user, username } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      const unsubscribe = ref.onSnapshot((doc) => {
        setUserData(doc.data());
      });

      return () => unsubscribe();
    }
  }, [user]);


  return (
    <AuthCheck>
      <div style={{ minHeight: "100vh", backgroundColor: "var(--primary)" }}>
      <UserProfile user={user} showButton={userData.answers.length > 0} />
        {userData && userData.answers.length > 0 ? (
          userData.sample && userData.sample.length > 0 ? (
            <Subjects subjects={userData.sample} />
          ) : null
        ) : (
          <NoAnswers />
        )}
      </div>
    </AuthCheck>
  );
}

function NoAnswers() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h2>
            You must provide your answers to the Form to access your
            recommendations
          </h2>
        </div>
      </div>
    </div>
  );
}
