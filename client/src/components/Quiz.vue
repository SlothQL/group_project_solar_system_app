<template>
   <div class="center">
      <!-- <form>
         <label for="name">Name</label>
         <input type="text" id="name" v-model="name" placeholder="Enter Name Here..."/>
         <quiz-item v-for="(question, index) in randomQuestions" :question="question" :key="index"/>
         </form> -->
      <b-card
         title="Test your Knowledge"
         img-src="../assets/bigbrain.jpg"
         img-alt="big-brain"
         img-top
         style="max-width: 30rem;"
         class="mb-2"
         >
         <b-card-body>
            <form>
               <label for="name">Name</label>
               <input type="text" id="name" v-model="name" placeholder="Enter Name Here..."/>
               <quiz-item v-for="(question, index) in randomQuestions" :question="question" :key="index"/>
            </form>
         </b-card-body>
         <b-button href="#" variant="primary">Submit</b-button>
      </b-card>
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
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}

.center {
  margin: auto;
  text-align: center;
}
</style>