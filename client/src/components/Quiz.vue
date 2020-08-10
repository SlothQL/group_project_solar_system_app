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
            questions: []
        };
    },
    name: "quiz", 

    mounted() {
        PlanetService.getInformation('http://localhost:3000/api/questions/')
            .then(questions => this.questions = questions);
    }

}
</script>

<style>

</style>