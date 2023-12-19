import * as client from '@/lib/client';
import { UserContext } from "@/lib/context";
import { useContext } from 'react';

export default function Subjects({ subjects }) {
    return (
        <main>
            <h1>Subjects</h1>
            <p>{subjects[0]['name']}</p>
            <Buttons />
        </main>
    );
}

function Buttons() {
    const { user, username } = useContext(UserContext);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button className="btn btn-primary btn-lg" onClick={() => client.updateUserRecommendations(user.uid)}>Predictions</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary btn-lg" onClick={() => client.trainModelWithUserChoice(user.uid)}>Train</button>
                </div>
            </div>   
        </div>
    );
}