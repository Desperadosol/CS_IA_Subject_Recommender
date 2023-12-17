import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
    const { username } = useContext(UserContext);

    return username ? props.children : props.fallback || <NotSignedIn />;
}

function NotSignedIn() {
    return (
        <section className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: "var(--primary)"}}>
            <div className="card" style={{width: "24rem", height: "12rem"}}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h2 className="card-title mb-3">You must be signed in</h2>
                    <a href="/enter" className="fs-4 link-underline-dark link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover" style={{color: "black"}}>Go to the logging page&rarr;</a>
                </div>
            </div>
        </section>
    ); 
}