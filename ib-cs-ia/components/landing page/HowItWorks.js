/*
 * This file contains a single React component: HowItWorks.
 *
 * HowItWorks is a functional component that returns a section of a webpage.
 * The section contains:
 * - A title.
 * - A row with two columns. The first column contains a video player, and the second column contains a series of steps with descriptions.
 * - An SVG for decorative purposes.
 * - A style element with CSS for the section, the video container, and the text container.
 */
export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="container mb-5" style={{ minWidth: "80%" }}>
        <h2
          className="text-center text-white display-4 fw-semibold"
          style={{ marginBottom: "64px" }}
        >
          <span style={{ color: "var(--primary)" }}>&quot;</span>How Does It Work?
          <span style={{ color: "var(--primary)" }}>&quot;</span>
        </h2>
        <div className="row">
          <div
            className="col-md-6 d-flex flex-column justify-content-center"
            style={{ padding: "0px 12px", marginBottom: "36px" }}
          >
            <div
              className="video-container"
              style={{
                border: "2px solid var(--primary)",
                borderRadius: "4px",
              }}
            >
              <video controls width="100%" height="auto">
                <source src="/showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-md-6 text-center" style={{ padding: "0px 24px" }}>
            <div className="text-container">
              <h3 className="text-white">Complete Form</h3>
              <p className="text-white fs-5">
                Users answer a form with preferences
              </p>
            </div>
            <div className="m-2">
              <img
                src="/arrow.png"
                alt=""
                width="48px"
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
            <div className="text-container">
              <h3 className="text-white">AI Recommendations</h3>
              <p className="text-white fs-5">
                Our neural network suggests personalized IB subjects
              </p>
            </div>
            <div className="m-2">
              <img
                src="/arrow.png"
                alt=""
                width="48px"
                style={{ transform: "rotate(90deg)" }}
              />
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
      <div className="custom-shape-divider-bottom-1702589339">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        .custom-shape-divider-bottom-1702589339 {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .custom-shape-divider-bottom-1702589339 svg {
          position: relative;
          display: block;
          width: calc(110% + 1.3px);
          height: 100px;
          transform: rotateY(180deg);
        }

        .custom-shape-divider-bottom-1702589339 .shape-fill {
          fill: #ffa91f;
        }

        .how-it-works-section {
          background: rgb(0, 0, 0);
          background: linear-gradient(
            170deg,
            rgba(0, 0, 0, 1) 30%,
            rgba(50, 50, 50, 1) 90%
          );
          padding: 80px 0;
          position: relative;
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
