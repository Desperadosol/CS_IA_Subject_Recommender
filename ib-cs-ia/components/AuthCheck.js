/*
 * This file contains a single React component: AuthCheck.
 *
 * AuthCheck is a functional component that takes two props: children and fallback.
 * It uses the UserContext to check if a user is logged in.
 * If a user is logged in, it renders the children prop.
 * If a user is not logged in, it renders the fallback prop or a default AlertCard.
 * The AlertCard contains a message and a link to the login page.
 * While the user's login status is being checked, a Loader component is displayed.
 */
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import AlertCard from './AlertCard';
import Loader from './Loader';
import Link from 'next/link';

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