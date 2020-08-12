<template>
    <div class="result-list" v-if="userAnswers.length === 10">
        <h4 class="results-headline">Your Results</h4>
        <ul v-for="(answer, index) in userAnswers" :key="index">
            <li v-if="answer === quizQuestions[index].correctAnswer" class="correct result-answer">Question {{index + 1}}: Well done! {{answer}} is the correct Answer.</li>
            <li v-if="answer !== quizQuestions[index].correctAnswer" class="wrong result-answer">Question {{index + 1}}: Maybe next time... {{quizQuestions[index].correctAnswer}} is the correct  Answer</li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: "quiz-result",

    data() {
        return {
            userAnswers: [],
            quizQuestions: []
        }
    },
    mounted() {
        eventBus.$on("answers", result => {
            this.userAnswers = result;
        })
        eventBus.$on("questions", result => {
            this.quizQuestions = result;
        })
    }
}
</script>

<style>
ul {
    list-style-type: none;
}

.correct {
    color: #31AFD4;
}
.wrong {
    color: #ffffff;
}
.result-list {
    color:#ffffff;
    margin-left: 80px;
    background-color: rgba(255, 255, 255, .25);
    padding: 15px 20px;
    text-align:center;
}
.results-headline {
    color: white;
    padding-bottom: 20px;
    text-align: center;
}

.result-answer {
    font-size: 20px;
}

</style>