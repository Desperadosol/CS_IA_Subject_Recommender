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

const numberOfAnswers = questions.length;

export const defaultAnswers = new Array(numberOfAnswers).fill(0)

export const defaultSubjects = [
    {
        "name": "English",
        "score": 0.0,
        "group": "group1"
    },
    {
        "name": "Polish",
        "score": 0.0,
        "group": "group1"
    },
    {
        "name": "Self-taught",
        "score": 0.0,
        "group": "group1"
    },
    {
        "name": "English",
        "score": 0.0,
        "group": "group2"
    },
    {
        "name": "Spanish",
        "score": 0.0,
        "group": "group2"
    },
    {
        "name": "German",
        "score": 0.0,
        "group": "group2"
    },
    {
        "name": "Business&Management",
        "score": 0.0,
        "group": "group3"
    },
    {
        "name": "Geography",
        "score": 0.0,
        "group": "group3"
    },
    {
        "name": "History",
        "score": 0.0,
        "group": "group3"
    },
    {
        "name": "Psychology",
        "score": 0.0,
        "group": "group3"
    },
    {
        "name": "Biology",
        "score": 0.0,
        "group": "group4"
    },
    {
        "name": "Physics",
        "score": 0.0,
        "group": "group4"
    },
    {
        "name": "Chemistry",
        "score": 0.0,
        "group": "group4"
    },
    {
        "name": "Computer-Science",
        "score": 0.0,
        "group": "group4"
    },
    {
        "name": "Mathematics-AA",
        "score": 0.0,
        "group": "group5"
    },
    {
        "name": "Mathematics-AI",
        "score": 0.0,
        "group": "group5"
    }
]

const numberOfSubjects = defaultSubjects.length;

export const defaultSample = []

export const defaultRecommendations = new Array(numberOfSubjects).fill(0.0)

export const defaultTargets = new Array(numberOfSubjects).fill(0)