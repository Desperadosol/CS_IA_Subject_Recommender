/*
 * This file contains two React components: Subjects and Subject.
 *
 * Subjects is a functional component that takes one prop: subjects.
 * It returns a main element that maps over the subjects prop and renders a Subject component for each subject.
 * It uses two arrays, ColorMap and GroupMap, to determine the colors and group names for the subjects.
 *
 * Subject is a functional component that takes several props: index, name, level, group, score, description, bgColor, color, and waveColor.
 * It returns a section element that represents a subject.
 * The section contains a row with two columns. The first column contains the subject name, level, group, and score. The second column contains the subject description.
 * The section has a custom background color, text color, and wave color.
 * The section also includes an SVG for decorative purposes.
 */
export default function Subjects({ subjects }) {
  const ColorMap = [
    "#ffa91f",
    "black",
    "white",
    "black",
    "#ffa91f",
    "white",
    "black",
  ];
  const GroupMap = [
    "Studies in Language and Literature.",
    "Language Acquisition.",
    "Individuals and Societies.",
    "Sciences.",
    "Mathematics.",
    "Additional Subject.",
  ];
  return (
    <main>
      {subjects.map((subject, index) => (
        <Subject
          key={index}
          index={index}
          name={subject.name}
          level={subject.level}
          group={GroupMap[index]}
          score={subject.score}
          description={subject.description}
          bgColor={ColorMap[index]}
          color={index === 1 || index === 3 ? "white" : "black"}
          waveColor={ColorMap[index + 1]}
        />
      ))}
    </main>
  );
}

function Subject({
  index,
  name,
  level,
  group,
  score,
  description,
  bgColor,
  color,
  waveColor,
}) {
  return (
    <section
      className=""
      style={{
        backgroundColor: bgColor,
        color: color,
        minHeight: "600px",
        position: "relative",
      }}
    >
      <div className="row " style={{ minHeight: "500px" }}>
        <div className="col-md-6 p-3 d-flex flex-column justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="display-4 mb-3">
              {name} {level}
            </h2>
            <div
              className="my-2"
              style={{ width: "80%", height: "2px", backgroundColor: color }}
            ></div>
            <p className="mb-3 fs-4">
              <strong>Group:</strong> {group}
            </p>
            <p className="fs-4">
              <strong>AI Score:</strong> {score}
            </p>
          </div>
        </div>
        <div className="col-md-6 p-3 d-flex flex-column justify-content-center">
          <p className="fs-5 m-3" style={{ paddingRight: "5%" }}>
            {description}
          </p>
        </div>
      </div>
      <br/>
      <div className="custom-shape-divider-bottom-1703021660">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            transform: index % 2 === 0 ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
            style={{ fill: waveColor }}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
            style={{ fill: waveColor }}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
            style={{ fill: waveColor }}
          ></path>
        </svg>
      </div>
      <style jsx>{`
        .custom-shape-divider-bottom-1703021660 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .custom-shape-divider-bottom-1703021660 svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 50px;
        }
      `}</style>
    </section>
  );
}
