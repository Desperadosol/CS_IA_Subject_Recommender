import styles from '../styles/smth.module.css'
import Layout from '@/components/layout';
import Chat from '@/components/chat'

export default function Home() {
    return (
        <Layout>
            <h1 className={`${styles.heading}`}>Hello</h1>
        </Layout>
    );
}