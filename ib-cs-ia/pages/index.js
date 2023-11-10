import styles from '../styles/smth.module.css'
import Layout from '@/components/layout';
import Chat from '@/components/chat'
import Link from 'next/link';
import Targets from '@/components/Targets'
import  * as client from '../lib/client'

export default function Home() {
    return (
        <Layout>
            <h1 className={`${styles.heading}`}>Hello</h1>
            <button onClick={() => client.updateUserRecommendations("1")}>Predictions</button>
            <button onClick={() => client.updateUserSample("1")}>Sample</button>
            <button onClick={() => client.trainModelWithUserChoice("1")}>Train</button>
            <Targets />

        </Layout>
    );
}