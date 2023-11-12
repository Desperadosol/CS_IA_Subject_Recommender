import styles from '../styles/smth.module.css'
import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import Chat from '@/components/chat'
import Link from 'next/link';
import Targets from '@/components/Targets'
import  * as client from '../lib/client'

export default function Home() {
    const { user, username } = useContext(UserContext);
    
    return (
        <main>
            {user ? <h1>{user.displayName}</h1> : <h1>oops</h1>}
            <Link href="/enter">
                <button>Log in</button>
            </Link>
            <h1 className={`${styles.heading}`}>Hello</h1>
            <button onClick={() => client.updateUserRecommendations("1")}>Predictions</button>
            <button onClick={() => client.updateUserSample("1")}>Sample</button>
            <button onClick={() => client.trainModelWithUserChoice("1")}>Train</button>
            <Targets />
        </main>

    );
}