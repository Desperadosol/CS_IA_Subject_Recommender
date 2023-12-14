export default function FeatureSection() {
    return (
      <section className="text-center my-5" style={{position: "relative"}}>
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
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <style jsx>{`
          .wave {
              position: absolute;
              bottom: -129px;
              left: 0;
              width: 100%;
              overflow: hidden;
              line-height: 0;
              transform: rotate(180deg);
          }
          .wave svg {
              position: relative;
              display: block;
              width: calc(100% + 1.3px);
              height: 100px;
          }
          .wave .shape-fill {
              fill: #000000;
          }
        `}</style>
      </section>
    );
}