<template>
  <div class="center">
      <h1>Test your Knowledge</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" placeholder="Enter Name Here..."/>
            <quiz-item v-for="(question, index) in randomQuestions" :question="question" :key="index"/>
        </form>
  </div>
</template>

<script>
import PlanetService from "../services/PlanetService.js";
import QuizItem from "./QuizItem.vue";
export default {
    data() {
        return {
            questions: [],
            randomQuestions: [],
            name: ""
        };
    },
    name: "quiz", 

    mounted() {
        PlanetService.getInformation('http://localhost:3000/api/questions/')
            .then(questions => {
                this.questions = questions
                this.getRandomQuestions()
                });
    },
    methods: {
        getRandomQuestions() {
            while(this.randomQuestions.length < 10) {
                var randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
                if (this.randomQuestions.indexOf(randomQuestion) === -1) {
                    this.randomQuestions.push(randomQuestion)
                };
            }
        }
    },
    components: {
        'quiz-item': QuizItem
    }

}
</script>

<style>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}
</style>