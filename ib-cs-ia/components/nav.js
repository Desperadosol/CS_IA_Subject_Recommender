import styles from './nav.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
      <div className="logo">Logo</div>
      <div className={`${styles.links}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={`${styles.authButtons}`}>
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  );
}