/*
 * This file contains two React components: Navbar and SignOutButton.
 *
 * Navbar is a functional component that uses the UserContext to check if a user is logged in.
 * It returns a navigation bar with links to different pages of the website.
 * If a user is logged in, it displays a Profile link and a Sign Out button.
 * If a user is not logged in, it displays Log In and Sign Up buttons.
 *
 * SignOutButton is a functional component that signs out the user when clicked.
 * It uses the auth object from Firebase to sign out the user and the useRouter hook from Next.js to redirect the user to the homepage.
 */
import Link from 'next/link';
import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import  { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex" href="/">
          <img src="/logo.png" alt="" height="25px"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/survey">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/adjust" className="nav-link">
                Adjust
              </Link>
            </li> 
            {username ?
              <li className="nav-item">
                <Link className="nav-link" href={`/${username}`}>
                  Profile
                </Link>
              </li>
              :
              null
            } 
          </ul>
          <div className="u-flex">
            {user? 
            <SignOutButton /> :
            <>
              <Link href="/enter" className='mx-3'>
                <button className="btn btn-light" style={{border: "1px solid black"}}>Log In</button>
              </Link>
              <Link href="/enter" >
                <button className="btn btn-dark">Sign Up</button>
              </Link>
            </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

function SignOutButton() {
  const router = useRouter();
  function customSignOut() {
    auth.signOut();
    router.push('/');
  }
  return <button className="btn btn-dark" onClick={() => customSignOut()}>Sign Out</button>
}