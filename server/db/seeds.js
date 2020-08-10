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