import UserProfile from "@/components/UserProfile";
import Subjects from "@/components/Subjects";
import { getUserWithUsername } from "@/lib/firestore_interface";
import AuthCheck from "@/components/AuthCheck";
import { firestore } from '../lib/firebase';

import { UserContext } from "@/lib/context";
import React, { useContext, useState, useEffect } from 'react';
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
            const ref = firestore.collection('users').doc(user.uid);
            const unsubscribe = ref.onSnapshot((doc) => {
                setUserData(doc.data());
            });

            return () => unsubscribe();  
        }
        
    }, [user]);

    return (
        <AuthCheck>
            <main style={{minHeight: "100vh"}}>
                <UserProfile user={user} showButton={userData.answers.length > 0}/>
                {
                userData && userData.answers.length > 0 ?
                    userData.sample && userData.sample.length > 0 ? 
                        <Subjects subjects={userData.sample}/>
                        :
                        null
                    :
                    <NoAnswers/>
                }
            </main>
        </AuthCheck>
    );
}



function NoAnswers() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <h2>You must provide your answers to the Form to access your recommendations</h2>
                </div>
            </div>   
        </div>
    );
}