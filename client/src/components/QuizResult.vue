<template>
    <div>
        <ul v-for="(answer, index) in userAnswers" :key="index">
            <li v-if="answer === quizQuestions[index].correctAnswer" class="correct">Question{{index + 1}}: Well done! {{answer}} is the correct Answer.</li>
            <li v-if="answer !== quizQuestions[index].correctAnswer" class="wrong">Question{{index + 1}}: Maybe next time... {{quizQuestions[index].correctAnswer}} is the correct Answer</li>
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
    color:green;
}
.wrong {
    color: red;
}
</style>