import AuthCheck from "@/components/AuthCheck";
import Targets from "@/components/Targets";
import { UserContext } from "@/lib/context";
import { useContext } from "react";


export default function Adjust() {
    const { user, username } = useContext(UserContext);

    return (
        <AuthCheck>
            <main className="container pt-4" style={{minHeight: "100vh"}}>
                <div className="row justify-content-center">
                    <a href={`/${username}`} className="m-4 fs-5">&larr; Go back to profile</a>   
                    <Targets />    
                </div>
            </main>
        </AuthCheck>
    );
}