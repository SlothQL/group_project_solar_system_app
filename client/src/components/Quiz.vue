<template>
   <div class="center">
      <b-card
         img-src="../assets/bigbrain.jpg"
         img-alt="big-brain"
         img-top
         style="max-width: 30rem; border: none; background-color: rgba(255, 255, 255, .25);"
         class="mb-2"
         >
         <h2 class="card-title">Test your Knowledge</h2>
         <form @submit.prevent="handleSubmit" method="post">
         <b-card-body>
               <label class="name-quiz" for="name">Name</label>
               <input type="text" class="name-field" id="name" v-model="name" placeholder="Enter Name Here..." required/>
               <quiz-item v-for="(question, index) in randomQuestions" :question="question" :key="index"/>
         </b-card-body>
         <input class="btn-quiz" type="submit" value="Check your answers!" id="submit"/>
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
            total: 0
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
        },
        calculateScore() {
            for (let i = 0; i < this.randomQuestions.length; i++) {
                if (this.randomQuestions[i].correctAnswer === this.randomQuestions[i].selectedAnswer) {
                    this.total +=1
                }
            }
            return this.total;
        },
        
        handleSubmit(event) {
            this.calculateScore();
            const newLeaderboard = {
                name: this.name,
                score: this.total
            }
            PlanetService.postInformation(newLeaderboard)
            .then(res => eventBus.$emit('leaderboard-added', res));
            this.total = 0;
            this.name = "";
            this.randomQuestions.selectedAnswer = "";
            eventBus.$emit("quiz-state", "hide");
            eventBus.$emit('questions', this.randomQuestions);
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

h2 {
    color: white;
}

.name-quiz {
    color: white;
    margin-right: 15px;
    margin-bottom: 25px;
}

.name-field {
    margin-bottom: 25px; 
}

</style>