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
         <form @submit.prevent="handleSubmit" method="post">
         <b-card-body>
               <label for="name">Name</label>
               <input type="text" id="name" v-model="name" placeholder="Enter Name Here..."/>
               <quiz-item v-for="(question, index) in randomQuestions" :question="question" :key="index"/>
         </b-card-body>
         <input type="submit" value="Submit" id="submit"/>
         </form>
      </b-card>
   </div>
</template>

<script>
import PlanetService from "../services/PlanetService.js";
import QuizItem from "./QuizItem.vue";
import {eventBus} from "../main.js";

export default {
    data() {
        return {
            questions: [],
            randomQuestions: [],
            name: "",
            total: 0,
            selectedAnswers: []
        };
    },
    name: "quiz", 

    mounted() {
        PlanetService.getInformation('http://localhost:3000/api/questions/')
            .then(questions => {
                this.questions = questions
                this.getRandomQuestions()
                });

        eventBus.$on('selected-answer', (answer) => {
            this.selectedAnswers.push(answer)
        })

    },
    
    methods: {
        getRandomQuestions() {
            while(this.randomQuestions.length < 10) {
                var randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
                if (this.randomQuestions.indexOf(randomQuestion) === -1) {
                    this.randomQuestions.push(randomQuestion)
                };
            }
        },
        calculateScore(array) {
           const correct = this.randomQuestions.map(x => x.correctAnswer);
           console.log(correct);
           for (let i =0; i < correct.length; i++) {
               for (let j = 0; j < array.length; j++) {
                   if (correct[i] === array[j]) {
                       this.total += 1;
                   }
               }
           }
           console.log(this.total);
           return this.total;
        },
        
        handleSubmit(event) {
            this.calculateScore(this.selectedAnswers);
            const newLeaderboard = {
                name: this.name,
                score: this.total
            }
            PlanetService.postInformation(newLeaderboard)
            .then(res => eventBus.$emit('leaderboard-added', res));
            this.total = 0;
            this.name = "";
            eventBus.$emit("quiz-state", "hide");
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