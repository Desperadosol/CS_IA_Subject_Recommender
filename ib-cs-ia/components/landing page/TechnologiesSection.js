const TechnologyCard = ({ iconURL, name, description, link }) => (
  <>
  <a href={link} target="_blank"  rel="noopener noreferrer" className="col-md-4 mb-4" style={{padding: "30px 40px 20px 40px", textDecoration: "none"}}>
    <div className="card card-custom">
      <div className="card-body text-left d-flex flex-column" style={{justifyContent: "space-between"}}>
        <img src={iconURL} width="72px"/>
        <div>
          <div className="d-flex " style={{width: "100%"}}>
            <h5 className="card-title fs-3">{name}</h5>
            
            <img className="mx-2" src="/right-arrow.png" width="16px" height="16px" style={{transform: "rotate(-45deg)"}}/>
            
          </div>
          <p className="card-text fs-6" style={{color: "#404040"}}>{description}</p>
        </div>
      </div>
    </div>
  </a>
  <style jsx>{`
    .card-custom {
      min-height: 250px;
      background: rgba(255,169,31,1);
      background: linear-gradient(170deg, rgba(253,187,45,1) 5%, rgba(255,24,24,1) 40%, rgba(255,175,40,1) 85%);
      border: 2px solid;
      border-radius: 14px;
      box-shadow: 0 1px 0 1px rgba(0,0,0,.02),0 4px 6px rgba(0,0,0,.02),inset 0 0 0 6px var(--primary);
      transition: transform 0.3s ease-in-out;
    }
    .card-custom:hover {
      transform: scale(1.05);
    }
  `}</style>
  </>
);

export default function TechnologiesSection() {
  return (
    <section className="py-4" style={{backgroundColor: "var(--primary)", position: "relative"}}>
      <h2 className="mb-4 display-4 fw-semibold text-center">Powered By</h2>
      <div className="row mb-5">
        <TechnologyCard
          iconURL="/tensorflow.svg"
          name="TensorFlow"
          description="Open-source machine learning framework for developing and training deep learning models."
          link="https://www.tensorflow.org/"
        />
        <TechnologyCard
          iconURL="/flask-icon.png"
          name="Flask"
          description="Lightweight Python web framework for building scalable and modular web applications."
          link="https://flask.palletsprojects.com/"
        />
        <TechnologyCard
          iconURL="/next-icon.png"
          name="Next.js"
          description="React-based JavaScript framework that simplifies building feature-rich web applications."
          link="https://nextjs.org/"
        />
      </div>
      <div className="custom-shape-divider-bottom-1702597863">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      <style jsx>{`
        .custom-shape-divider-bottom-1702597863 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .custom-shape-divider-bottom-1702597863 svg {
          position: relative;
          display: block;
          width: calc(105% + 1.3px);
          height: 70px;
          transform: rotateY(180deg);
        }

        .custom-shape-divider-bottom-1702597863 .shape-fill {
          fill: #000000;
        }
      `}</style>
    </section>
  );
}
