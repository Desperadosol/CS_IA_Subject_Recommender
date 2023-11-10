import '../styles/global.css'
import Layout from '@/components/layout';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '@/lib/context';
import { useUserData } from '@/lib/hooks';


function App({ Component, pageProps }) {
    
    const userData = useUserData();

    return (
        <UserContext.Provider value={userData}>
            <Layout>
                <Component {...pageProps} />
                <Toaster />
            </Layout>
        </UserContext.Provider>
    );
}

export default App;