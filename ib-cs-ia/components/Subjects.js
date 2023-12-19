
export default function Subjects({ subjects }) {
    const ColorMap = [
        "orange",
        "black",
        "white",
        "black",
        "orange",
        "white"
    ];
    const GroupMap = [
        "Studies in Language and Literature.",
        "Language Acquisition.",
        "Individuals and Societies.",
        "Sciences.",
        "Mathematics.",
        "Additional Subject."
    ];
    return (
        <main >
            <h1>Subjects</h1>
            {subjects.map((subject, index) => (
                <Subject key={index} name={subject.name} level={subject.level} group={GroupMap[index]} score={subject.score} bgColor={ColorMap[index]} color={index === 1 || index === 3 ? "white" : "black"}/>
            ))}   
        </main>
    );
}

function Subject({ name, level, group, score, bgColor, color }) {
    return (
        <section className="w-100 vh-60 d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: bgColor, color: color}}>
            <h2 className="mb-3">{name} {level}</h2>
            <p className="mb-3"><strong>Group:</strong> {group}</p>
            <p><strong>AI Score:</strong> {score}</p>
        </section>
    );
}

