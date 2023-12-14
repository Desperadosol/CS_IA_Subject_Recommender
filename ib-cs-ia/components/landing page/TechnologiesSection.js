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
      <div className="row">
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
    </section>
  );
}
