import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
    <footer className={styles.footer}>
        <Link href="https://www.youtube.com/watch?v=jt9mM1jw7PE">In Paris</Link>
    </footer>
  );

}