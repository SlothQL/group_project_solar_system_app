<template>
  <div>
      <h1>Quiz</h1>
  </div>
</template>

<script>
import PlanetService from "../services/PlanetService.js"
export default {
    data() {
        return {
            questions: [],
            randomQuestions: []
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
    }

}
</script>

<style>

</style>