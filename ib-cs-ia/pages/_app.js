/*
 * This file contains the main App component for the Next.js application.
 * It imports the necessary modules, stylesheets, and components.
 * It uses the useUserData hook to get the user's data and the UserContext to provide this data to child components.
 * It uses the useEffect hook to import the Bootstrap JavaScript bundle after the component mounts.
 * It returns a UserContext.Provider that wraps a Layout component, which in turn wraps the Component prop.
 * The Component prop represents the current page of the application.
 * The pageProps prop is spread onto the Component, passing all of its properties as props to the Component.
 * The Toaster component from react-hot-toast is used to display toast notifications.
 * The Head component from Next.js is used to add elements to the head of the HTML document.
 */
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
                {/* <meta property="og:image" content="/preview.png" /> */}
                <meta property="og:image" content="https://img.freepik.com/free-vector/gradient-dynamic-lines-background_23-2149020285.jpg" />
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