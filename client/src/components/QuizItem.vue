<template>
   <div>
      <b-card
         :title="question.question"
         style="max-width: 30rem;"
         class="mb-2 center"
         >
         <b-card-text>
            <div v-for="(option, index) in question.options" :key="index">
               <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                     <input v-on:change="selectAnswer" v-model="selectedAnswer" type="radio" required :id="`${question._id}: ${index}`" :name="question._id" :value="option" aria-label="Checkbox for following text input">
                  </b-input-group-prepend>
                  <b-form-input disabled aria-label="Text input with checkbox" class="center" :value="option"></b-form-input>
               </b-input-group>
            </div>
         </b-card-text>
      </b-card>
   </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
    name: "quiz-item",
    props: ["question"],
    data() {
       return {
          selectedAnswer: ""
       }
    },
    methods: {
      selectAnswer() {
         eventBus.$emit('selected-answer', this.selectedAnswer);
         eventBus.$emit('question-id', this.question._id)
      }
   }
}
</script>

<style>
.center {
  margin: auto;
}
</style>