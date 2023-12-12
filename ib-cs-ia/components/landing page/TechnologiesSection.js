const TechnologyCard = ({ iconURL, name, description, link }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <div className="card-body text-center">
        <img src={iconURL} width="64px"/>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
);

export default function TechnologiesSection() {
  return (
    <section className="text-center my-5">
      <h2 className="mb-4">Technologies Used</h2>
      <div className="row">
        <TechnologyCard
          iconURL="/tensorflow-icon.png"
          name="TensorFlow"
          description="An open-source machine learning framework."
          link="https://www.tensorflow.org/"
        />
        <TechnologyCard
          iconURL="/flask-icon.png"
          name="Flask"
          description="A lightweight Python web framework."
          link="https://flask.palletsprojects.com/"
        />
        <TechnologyCard
          iconURL="/next-icon.png"
          name="Next.js"
          description="A React-based web framework for building modern web applications."
          link="https://nextjs.org/"
        />
      </div>
    </section>
  );
}
