/*
 * This file contains a single React component: Layout.
 *
 * Layout is a functional component that takes one prop: children.
 * It returns a fragment that includes a Navbar, the children prop, and a Footer.
 * The children prop allows this component to be used as a wrapper around various content.
 * The Navbar and Footer components are imported from other files and are displayed at the top and bottom of the page, respectively.
 */
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}