import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Layout from '@/components/layout';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { useEffect } from 'react';
import Head from 'next/head';


function App({ Component, pageProps }) {
    const userData = useUserData();

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <UserContext.Provider value={userData}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Picker</title>
                <meta property="description" content="Pick your future with AI-powered subject recommender" />
                <meta property="og:title" content="Picker" />
                <meta property="og:description" content="Pick your future with AI-powered subject recommender" />
                <meta property="og:image" content="./preview.png" />
                <meta property="og:url" content="https://picker.com" />
            </Head>
            <Layout>
                <Component {...pageProps} />
                <Toaster />
            </Layout>
        </UserContext.Provider>
    );
}

export default App;