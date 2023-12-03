export default function HomeSection() {
    return (
        <section className="container text-center">
            <div className="row">
                <div className="col d-flex flex-column">
                    <div className="m-4">
                        <h1>Home</h1>
                        <h2>sub-home</h2>
                    </div>
                    <div className="m-4">
                        <button className="btn btn-primary">Try Now &rarr;</button>
                    </div>
                </div>
                <div className="col col-md-auto">
                    <img src="people.png" alt="people" className="img-fluid" style={{maxWidth: "640px"}}/>
                </div>
            </div>
            
        </section>
    )

}