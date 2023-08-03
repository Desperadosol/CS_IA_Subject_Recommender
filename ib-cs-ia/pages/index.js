import styles from '../styles/smth.module.css'
import Layout from '@/components/layout';

export default function Home() {
    return (
        <Layout>
            <h1 className={`${styles.heading}`}>Bitch</h1>
        </Layout>
    );
}