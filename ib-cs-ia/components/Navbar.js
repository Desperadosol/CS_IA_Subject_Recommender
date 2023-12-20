import Link from 'next/link';
import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import  { auth } from '../lib/firebase';

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
              <Link className="nav-link" href={`/${username}`}>
                Profile
              </Link>
            </li>
          </ul>
          <div className="u-flex">
            {user? 
            <SignOutButton /> :
            <Link href="/enter">
              <button className="btn btn-outline-success">Log in</button>
            </Link>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

function SignOutButton() {
  return <button className="btn btn-outline-danger" onClick={() => auth.signOut()}>Sign Out</button>
}