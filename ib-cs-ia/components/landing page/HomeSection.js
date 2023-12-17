import { motion } from 'framer-motion';

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
                            <a href="/survey" className="display-5 fw-semibold link-underline-warning link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover" style={{color: "var(--primary)"}}>Try Now &rarr;</a>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}