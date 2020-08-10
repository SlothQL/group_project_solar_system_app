use knowledge_quiz;

db.dropDatabase();

db.questions.insertMany([
    {
        question: "An Astronomical Unit is the average distance between which two objects in our solar system?",
        options: ["Earth and the Moon", "Earth and the Sun", "The Sun and the Moon", "The Sun and Mars"],
        correctAnswer: "Earth and the Sun"
    },
    {
        question: "Ganymede, the largest moon in our solar system, belongs to which planet?",
        options: ["Neptune", "Uranus", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "In our solar system, which planet has the shortest day?",
        options: ["Jupiter", "Venus", "Mars", "Earth"],
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
        correctAnswer: "Earth"
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
        options: ["Saturn", "Mars", "Jupiter", "Neptune"],
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
        options: ["Jupiter", "Uranus", "Saturn", "Earth"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Our solar system is located in what galaxy?",
        options: ["Andromeda Galaxy", "The Milky Way Galaxy"],
        correctAnswer: "The Milky Way Galaxy"
    },
    {
        question: "Which planet in our solar system spins the fastest?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Jupiter. It rotates once on average in just under 10 hours."
    },
    {
        question: "What planet in our solar system has the longest day?",
        options: ["Earth", "Mercury", "Saturn", "Venus"],
        correctAnswer: "Venus (243 Earth days)"
    },
    {
        question: "In our solar system which two planets rotate clockwise?",
        options: ["Venus and Uranus", "Uranus and Mercury", "Mercury and Mars", "Venus and Mars"],
        correctAnswer: "Venus and Uranus"
    },
    {
        question: "What planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        correctAnswer: "Mercury"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "How many moons does the planet Venus have?",
        options: ["One", "Two", "Zero", "Five"],
        correctAnswer: "Zero"
    },
    {
        question: "What former planet was demoted to a dwarf planet in 2006?",
        options: ["Eris", "Pluto", "Ceres", "Haumea"],
        correctAnswer: "Pluto"
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