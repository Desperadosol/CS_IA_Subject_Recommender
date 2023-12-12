export default function HowItWorks() {
    return (
    <section className="how-it-works-section">
      <div className="container" style={{minWidth: "80%"}}>
        <h2 className="text-center text-white display-4 fw-semibold" style={{marginBottom: "64px"}}><span style={{color: "var(--primary)"}}>"</span>How Does It Work?<span style={{color: "var(--primary)"}}>"</span></h2>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center" style={{padding: "0px 12px", marginBottom: "36px"}}>
            <div className="video-container" style={{border: "2px solid var(--primary)", borderRadius: "4px"}}>
              <video controls width="100%" height="auto">
                <source src="/showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-md-6 text-center" style={{padding: "0px 24px"}}>
            <div className="text-container">
              <h3 className="text-white">Complete Form</h3>
              <p className="text-white fs-5">
                Users answer a form with preferences
              </p>
            </div>
            <div className="m-2">
              <img src="/arrow.png" alt="" width="48px" style={{transform: "rotate(90deg)"}}/>
            </div>
            <div className="text-container">
              <h3 className="text-white">AI Recommendations</h3>
              <p className="text-white fs-5">
                Our neural network suggests personalized IB subjects
              </p>
            </div>
            <div className="m-2">
              <img src="/arrow.png" alt="" width="48px" style={{transform: "rotate(90deg)"}}/>
            </div>
            <div className="text-container">
              <h3 className="text-white">Adjust as Needed</h3>
              <p className="text-white fs-5">
                Users review and fine-tune recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .how-it-works-section {
            background: rgb(0,0,0);
            background: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 90%);
            padding: 80px 0;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }

        .video-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .text-container {
          padding: 12px 12px 4px 12px;
        }
      `}</style>
    </section>
    );
}