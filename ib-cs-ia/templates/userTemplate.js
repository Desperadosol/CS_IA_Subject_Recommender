export const questions = [
    "I find the sciences intriguing and enjoyable.",
    "I find exploring various historical events and their impact on the present fascinating.",
    "In terms of my interests, the prospect of delving into different cultures and languages seems appealing.",
    "I feel confident in my mathematical abilities and find joy in solving complex problems.",
    "In my opinion, studying economic principles is a necessity in today's world.",
    "I am open to the idea of investigating environmental issues and their global implications.",
    "I find understanding political systems and their effects on societies important.",
    "I believe learning a second language would be beneficial for my future goals.",
    "I enjoy analyzing literature and exploring the complexities of language.",
    "I would like to study the human mind and behavior.",
    "I am interested in the application of technological solutions to real-world problems.",
    "I value physical activity and health, and see the importance of learning more about the human body.",
    "In terms of my career aspirations, I believe business and management knowledge is crucial.",
    "I agree with the idea that a well-rounded education includes learning about diverse historical periods and events.",
    "I feel confident in my ability to perform laboratory experiments and analyze results.",
    "I am interested in the application of physics in understanding the fundamental nature of the universe.",
    "In terms of my career goals, I believe knowledge of creative writing and storytelling is essential.",
    "I am open to exploring my creativity through problem-solving and mathematical exploration."
]


export const defaultAnswers = []

export const defaultSubjects = [
    {
        "name": "English",
        "score": 0.0,
        "group": "group1",
        "description": "The English subject in the IB curriculum focuses on developing language and literature skills. It involves the study of various literary works, analyzing texts, and improving communication skills. Students explore different genres, themes, and literary techniques to enhance their understanding and interpretation of literature. The subject also emphasizes critical thinking, writing skills, and the ability to express ideas effectively."
    },
    {
        "name": "Polish",
        "score": 0.0,
        "group": "group1",
        "description": "The Polish subject in the IB curriculum focuses on developing language skills in Polish. It involves the study of grammar, vocabulary, reading, writing, and speaking in Polish. Students explore various literary works, analyze texts, and improve their communication skills in the Polish language."
    },
    {
        "name": "Self-taught",
        "score": 0.0,
        "group": "group1",
        "description": "The Self-taught subject in the IB curriculum allows students to study a language independently. It involves self-directed learning, reading, writing, and speaking in the chosen language. Students explore various literary works, analyze texts, and improve their communication skills in the chosen language."
    },
    {
        "name": "English",
        "score": 0.0,
        "group": "group2",
        "description": "The English subject in the IB curriculum focuses on developing language and literature skills. It involves the study of various literary works, analyzing texts, and improving communication skills. Students explore different genres, themes, and literary techniques to enhance their understanding and interpretation of literature. The subject also emphasizes critical thinking, writing skills, and the ability to express ideas effectively."
    },
    {
        "name": "Spanish",
        "score": 0.0,
        "group": "group2",
        "description": "The Spanish subject in the IB curriculum focuses on developing language skills in Spanish. It involves the study of grammar, vocabulary, reading, writing, and speaking in Spanish. Students explore various cultural aspects, analyze texts, and improve their communication skills in the Spanish language."
    },
    {
        "name": "German",
        "score": 0.0,
        "group": "group2",
        "description": "The German subject in the IB curriculum focuses on developing language skills in German. It involves the study of grammar, vocabulary, reading, writing, and speaking in German. Students explore various cultural aspects, analyze texts, and improve their communication skills in the German language."
    },
    {
        "name": "Business and Management",
        "score": 0.0,
        "group": "group3",
        "description": "The Business & Management subject in the IB curriculum focuses on developing knowledge and understanding of business principles and practices. It involves the study of various business functions, such as marketing, finance, operations, and human resources. Students learn about business strategies, decision-making processes, and ethical considerations in the business world."
    },
    {
        "name": "Geography",
        "score": 0.0,
        "group": "group3",
        "description": "The Geography subject in the IB curriculum focuses on studying the Earth's physical features, climate, and human populations. It involves the study of various geographical processes, such as landforms, weather patterns, population distribution, and urbanization. Students learn about the interconnectedness of human and natural systems and analyze spatial patterns and relationships."
    },
    {
        "name": "History",
        "score": 0.0,
        "group": "group3",
        "description": "The History subject in the IB curriculum focuses on studying historical events, developments, and their impact on societies. It involves the study of various historical periods, themes, and regions. Students analyze primary and secondary sources, develop historical interpretations, and enhance their critical thinking and research skills."
    },
    {
        "name": "Psychology",
        "score": 0.0,
        "group": "group3",
        "description": "The Psychology subject in the IB curriculum focuses on studying human behavior and mental processes. It involves the study of various psychological theories, research methods, and applications. Students explore topics such as cognitive processes, social behavior, abnormal psychology, and developmental psychology. They develop critical thinking, research, and analytical skills."
    },
    {
        "name": "Biology",
        "score": 0.0,
        "group": "group4",
        "description": "The Biology subject in the IB curriculum focuses on studying living organisms and their interactions with the environment. It involves the study of various biological concepts, such as cell biology, genetics, ecology, and evolution. Students conduct laboratory experiments, analyze data, and develop an understanding of the scientific method and biological processes."
    },
    {
        "name": "Physics",
        "score": 0.0,
        "group": "group4",
        "description": "The Physics subject in the IB curriculum focuses on studying the fundamental principles of the physical world. It involves the study of various physics concepts, such as mechanics, electricity, magnetism, waves, and quantum physics. Students conduct experiments, analyze data, and develop problem-solving and critical thinking skills in the field of physics."
    },
    {
        "name": "Chemistry",
        "score": 0.0,
        "group": "group4",
        "description": "The Chemistry subject in the IB curriculum focuses on studying the composition, properties, and transformations of matter. It involves the study of various chemical concepts, such as atomic structure, bonding, reactions, and organic chemistry. Students conduct laboratory experiments, analyze data, and develop an understanding of chemical principles and their applications."
    },
    {
        "name": "Computer-Science",
        "score": 0.0,
        "group": "group4",
        "description": "The Computer Science subject in the IB curriculum focuses on studying computer systems, programming, and computational thinking. It involves the study of various programming languages, algorithms, data structures, and software development methodologies. Students develop problem-solving, logical reasoning, and programming skills in the field of computer science."
    },
    {
        "name": "Mathematics-AA",
        "score": 0.0,
        "group": "group5",
        "description": "The Mathematics Analysis and Approaches (AA) subject in the IB curriculum focuses on developing mathematical knowledge, understanding, and skills. It involves the study of various mathematical concepts, such as algebra, calculus, statistics, and probability. Students develop problem-solving, logical reasoning, and analytical skills in the field of mathematics."
    },
    {
        "name": "Mathematics-AI",
        "score": 0.0,
        "group": "group5",
        "description": "The Mathematics Applications and Interpretation (AI) subject in the IB curriculum focuses on applying mathematical concepts to real-world situations. It involves the study of various mathematical topics, such as statistics, financial mathematics, modeling, and optimization. Students develop problem-solving, data analysis, and decision-making skills using mathematical tools and techniques."
    }
]

const numberOfSubjects = defaultSubjects.length;

export const defaultSample = []

export const defaultRecommendations = new Array(numberOfSubjects).fill(0.0)

export const defaultTargets = new Array(numberOfSubjects).fill(0)