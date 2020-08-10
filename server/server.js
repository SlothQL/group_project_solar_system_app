const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const app = express();
app.use(parser.json());
app.use(cors());


MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('knowledge_quiz');
        const collectionQuestions = db.collection('questions');
        const collectionLeaderboard = db.collection('leaderboard');

        const questionsRouter = createRouter(collectionQuestions);
        app.use('/api/questions', questionsRouter);

        const leaderboardRouter = createRouter(collectionLeaderboard);
        app.use('/api/leaderboard', leaderboardRouter);
    })
    .catch(err => console.log(error));

    app.listen(3000, function() {
        console.log(`Listening on port ${this.address().port}`);
    });