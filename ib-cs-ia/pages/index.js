import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import Targets from '@/components/Targets'
import  * as client from '../lib/client'

export default function Home() {
    const { user, username } = useContext(UserContext);
    
    return (
        <main>
            {user ? <h1>{user.displayName}</h1> : <h1>oops</h1>}
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <button className="btn btn-primary btn-lg" onClick={() => client.updateUserRecommendations(user.uid)}>Predictions</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary btn-lg" onClick={() => client.updateUserSample(user.uid)}>Sample</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary btn-lg" onClick={() => client.trainModelWithUserChoice(user.uid)}>Train</button>
                    </div>
                </div>   
            </div>
            <br/>
            <br/>
            <Targets />
        </main>

    );
}