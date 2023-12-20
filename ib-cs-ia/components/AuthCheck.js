import { useContext } from 'react';
import { UserContext } from '../lib/context';
import AlertCard from './AlertCard';
import Loader from './Loader';
import Link from 'next/link';

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
    const { username, loading } = useContext(UserContext);

    return (
        <>
            <Loader show={loading}/>
            {
            username ? props.children : props.fallback ||  
            <AlertCard>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h2 className="card-title mb-3 fs-3">You must be signed in</h2>
                    <Link href="/enter" className="fs-5 link-underline-white link-offset-1" style={{color: "white"}}>Go to the logging page&rarr;</Link>           
                </div>
            </AlertCard>
            }
        </>
    );

}