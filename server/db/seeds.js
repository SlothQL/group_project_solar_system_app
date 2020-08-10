use knowledge_quiz;

db.dropDatabase();

db.questions.insertMany([
    {
        question: "An Astronomical Unit is the average distance between which two objects in our solar system?",
        options: ["The Earth and the Moon", "The Earth and the Sun", "The Sun and the Moon", "The Sun and Mars"],
        correctAnswer: "The Earth and the Sun"
    },
    {
        question: "Ganymede, the largest moon in our solar system, belongs to which planet?",
        options: ["Neptune", "Uranus", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "In our solar system, which planet has the shortest day?",
        options: ["Jupiter", "Venus", "Mars", "The Earth"],
        correctAnswer: "Jupiter"
    },
    {
        question: "In our solar system which two planets are known as ice giants?",
        options: ["Neptune and Saturn", "Uranus and Saturn", "Saturn and Pluto", "Neptune and Uranus"],
        correctAnswer: "Neptune and Uranus"
    },
    {
        question: "Which planet in our solar system has an axis that is tilted by 98 degrees?",
        options: ["Uranus", "Venus", "Mars", "Saturn"],
        correctAnswer: "Uranus"
    },
    {
        question: "Titan, Enceladus, Mimas & Iapetus are just some of the moons orbiting which planet?",
        options: ["Neptune", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Saturn"
    },
    {
        question: "Ceres is a dwarf planet that lies between the orbits of which two planets in our solar system?",
        options: ["Mars and Jupiter", "Mars and Earth", "Jupiter and Saturn", " Saturn and Uranus"],
        correctAnswer: "Mars & Jupiter"
    },
    {
        question: "Which planet in our solar system has the most oxygen?",
        options: ["Mars", "Earth", "Mercury", "Venus"],
        correctAnswer: "The Earth"
    },
    {
        question: "How many planets in our solar system have moons?",
        options: ["Five", "Four", "Six", " Eight"],
        correctAnswer: "Six"
    },
    {
        question: "Which planet is furthest from the sun?",
        options: ["Neptune", "Uranus", "Saturn", "Mercury"],
        correctAnswer: "Neptune"
    },
    {
        question: "What planet in our solar system has the most gravity?",
        options: ["Venus", "Jupiter", "Earth", "Mars"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Callisto is the name of a moon orbiting what planet in our solar system?",
        options: ["Neptune", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the hottest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Saturn"],
        correctAnswer: "Venus"
    },
    {
        question: "Which is the largest of Mars’ two moons?",
        options: ["Phobos", "Deimos"],
        correctAnswer: "Phobos"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Neptune", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    }
]);


db.leaderboard.insertMany([
    {
        name: "Alina Linden",
        score: 18
    },
    {
        name: "Jane O'Donnell",
        score: 15
    },
    {
        name: "James Monks",
        score: 17
    },
    {
        name: "Ruben Botha",
        score: 16
    }
]);