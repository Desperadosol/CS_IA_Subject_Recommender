import styles from '../styles/smth.module.css'
import Layout from '@/components/layout';
import Chat from '@/components/chat'
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <h1 className={`${styles.heading}`}>Hello</h1>
            <Link href="/form">
                <button>Form page</button>
            </Link>
        </Layout>
    );
}