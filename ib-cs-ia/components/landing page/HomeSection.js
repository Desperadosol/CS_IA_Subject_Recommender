export default function HomeSection() {
    return (
        <section className="" style={{height: "100vh", backgroundImage: `url(/student-bg-dark.png)`, backgroundSize: "cover"}}>
            <div className="d-flex align-items-center" style={{height: "100%"}}>
                <div className="col d-flex flex-column " style={{height: "70%", justifyContent: "space-evenly"}}>
                    <div className="m-4">
                        <h1 className="display-1 fw-semibold" style={{color: "var(--primary)", marginLeft: "5%"}}>Pick Your Future</h1>
                        <h2 className="display-6 fw-semibold" style={{color: "var(--primary)", marginLeft: "5%"}}>With AI-powered subject recommender</h2>
                    </div>
                    <div className="m-4 text-left">
                        <button className="btn underline" style={{marginLeft: "5%"}}>
                            <a href="" className="display-5 fw-semibold link-underline-warning link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover" style={{color: "var(--primary)"}}>Try Now &rarr;</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}