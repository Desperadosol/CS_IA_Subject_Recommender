/*
 * This is a React functional component named HomeSection.
 * It uses the framer-motion library for animation.
 * The component contains:
 * - A section with a background image and a div that aligns its children vertically.
 * - Inside the div, there is another div with two main parts, each containing a motion component (h1, h2, and button).
 * - The motion components have initial, whileInView, and exit props that determine their animation states.
 * - The button contains a Link component from the next/link library, which navigates to the "/survey" route when clicked.
 */
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeSection() {
    const introHeaderVariants = {
        hide: {
            opacity: 0,
            x: -200,
        },
        show1: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                delay: 0.15,
            },
        },
        show2: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                delay: 0.4
            },
        },
        show3: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                delay: 0.7
            },
        },
    };
    return (
        <section className="" style={{height: "100vh", backgroundImage: `url(/student-bg-dark.png)`, backgroundSize: "cover"}}>
            <div className="d-flex align-items-center" style={{height: "100%"}}>
                <div className="col d-flex flex-column " style={{height: "70%", justifyContent: "space-evenly"}}>
                    <div className="m-4">
                        <motion.h1 initial="hide" whileInView="show1" exit="hide" variants={introHeaderVariants} className="display-1 fw-semibold" style={{color: "var(--primary)", marginLeft: "5%"}}>Pick Your Future</motion.h1>
                        <motion.h2 initial="hide" whileInView="show2" exit="hide" variants={introHeaderVariants} className="display-6 fw-semibold" style={{color: "var(--primary)", marginLeft: "5%"}}>With AI-powered subject recommender</motion.h2>
                    </div>
                    <div className="m-4">
                        <motion.button initial="hide" whileInView="show3" exit="hide" variants={introHeaderVariants} className="" style={{marginLeft: "5%", outline: "none", border: "none", background: "none"}}>
                            <Link href="/survey" className="display-5 fw-semibold link-underline-warning link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover" style={{color: "var(--primary)"}}>Try Now &rarr;</Link>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}