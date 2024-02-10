/*
 * This file contains a single React component: Adjust.
 *
 * Adjust is a functional component that manages the user's targets.
 * It uses the UserContext to get the current user and username.
 * It maintains state for the user's data and updates this state when the user's document in the Firestore database changes.
 * It uses the useEffect hook to set up a real-time subscription to the user's document.
 * It returns an AuthCheck component that wraps a main element.
 * The main element contains a Targets component or an AlertCard component.
 * The Targets component is displayed if the user has provided answers.
 * The AlertCard component is displayed if the user has not provided any answers and contains a message telling the user to provide their answers on the Form page.
 */
import AuthCheck from "@/components/AuthCheck";
import Targets from "@/components/Targets";
import { UserContext } from "@/lib/context";
import { useContext, useEffect, useState } from "react";
import { getUser } from "@/lib/firestore_interface";
import AlertCard from "@/components/AlertCard";
import Link from "next/link";

export default function Adjust() {
    const { user, username } = useContext(UserContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            getUser(user.uid).then(data => setUserData(data));
        }
    }, [user]);

    return (
        <AuthCheck>
            <main className="container pt-4" style={{minHeight: "100vh"}}>
                <div className="row justify-content-center">
                    {userData && userData.answers.length > 0 ? 
                        <Targets /> 
                        :
                        <AlertCard>
                            <h2 className="card-title mb-3">Provide answers on the Form page</h2>
                            <Link href="/survey" className="fs-5 link-underline-white link-offset-1" style={{color: "white"}}>Go to the form page&rarr;</Link>
                        </AlertCard>
                    }  
                </div>
            </main>
        </AuthCheck>
    );
}