export default function FeatureSection() {
    return (
      <section className="text-center my-5" >
        <h1 className="display-4 fw-semibold" style={{marginBottom: "32px"}}>What makes us <span style={{textDecoration: "underline", textDecorationColor: "var(--primary)"}}>special</span>?</h1>
        <div className="row" style={{marginBottom: "128px"}}>
          <div className="col-md-4">
            <img src="/ai-feature-icon.png" width="128" style={{marginTop: "32px"}}/>
            <h3 className="mt-4"><span style={{textDecoration: "underline", textDecorationColor: "var(--primary)"}}>AI-powered</span> algorithm</h3>
            <p className="fs-5" style={{margin: "0px 12%"}}>Elevate your academic journey with our AI-driven recommendations tailored to your unique preferences.</p>
          </div>
          <div className="col-md-4">
            <img src="/community-feature-icon.png" width="128" style={{marginTop: "32px"}}/>
            <h3 className="mt-4">Built with the <span style={{textDecoration: "underline", textDecorationColor: "var(--primary)"}}>community</span></h3>
            <p className="fs-5" style={{margin: "0px 12%"}}>Co-create the future of education—our tool evolves with insights from a global community, ensuring relevance for all.</p>
          </div>
          <div className="col-md-4">
            <img src="/free-feature-icon.png" width="128" style={{marginTop: "32px"}}/>
            <h3 className="mt-4">Completely <span style={{textDecoration: "underline", textDecorationColor: "var(--primary)"}}>free</span></h3>
            <p className="fs-5" style={{margin: "0px 12%"}}>Access quality subject recommendations without cost—empowering every student, everywhere.</p>
          </div>
        </div>
      </section>
    );
}