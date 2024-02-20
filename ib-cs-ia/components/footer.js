/*
 * This file contains a single React component: Footer.
 *
 * Footer is a functional component that returns a footer element for a webpage.
 * The footer contains:
 * - A container with a logo image and a div with two links.
 * - The links lead to GitHub and LinkedIn profiles and have custom styles.
 * - Each link contains an image and has a hover effect.
 * - A style element with CSS for the custom link class and its hover state.
 */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-4" style={{minWidth: "90%"}}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link href="/">
              <img
                src="/logo-white.svg" 
                alt="Logo"
                style={{ width: '120px', height: '50px' }}
              />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-link {
          background-color: #bbbbbb;
        }
        .custom-link:hover {
          background-color: #ffffff;
        }
      `}</style>
    </footer>
  );
}