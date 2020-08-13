<template>
    <div class="result-list" v-if="quizQuestions.length === 10">
        <h4 class="results-headline">Your Results</h4>
        <ul v-for="(answer, index) in quizQuestions" :key="index">
            <li v-if="answer.correctAnswer === answer.selectedAnswer" class="correct result-answer">Question {{index + 1}}: Well done! {{answer.selectedAnswer}} is the correct answer.</li>
            <li v-if="answer.correctAnswer !== answer.selectedAnswer" class="wrong result-answer">Question {{index + 1}}: Maybe next time... {{answer.correctAnswer}} is the correct answer</li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: "quiz-result",

    data() {
        return {
            quizQuestions: []
        }
    },
    mounted() {
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
    color: #48badd;
}
.wrong {
    color: #ffffff;
}
.result-list {
    color:#ffffff;
    margin-left: 100px;
    background-color: rgba(255, 255, 255, .25);
    padding: 15px 30px 15px 0px;
    text-align:center;
}
.results-headline {
    color: white;
    padding-left: 30px;
    padding-bottom: 20px;
    text-align: center;
}

.result-answer {
    font-size: 18px;
    margin-left: -10px;
}

</style>