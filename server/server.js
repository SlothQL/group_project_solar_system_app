const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(parser.json());
app.use(cors());
const app = express();

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('knowledge_quiz');
        const collectionQuestions = db.collection('questions');
        const collectionLeaderboard = db.collection('leaderboard');

        const questionsRouter = createRouter(questions);
        app.use('/api/questions', questionsRouter);

        const leaderboardRouter = createRouter(leaderboard);
        app.use('/api/leaderboard', leaderboardRouter);
    })
    .catch(console.err);

    app.listen(3000, function() {
        console.log(`Listening on port ${this.address().port}`);
    });