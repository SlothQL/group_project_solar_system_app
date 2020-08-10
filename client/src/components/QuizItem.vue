<template>
  <div>
    <h4 for="question"> {{ question.question}}</h4>
      <!-- <div v-for="(option, index) in question.options" :key="index">
        <p>{{option}}</p>  
        <input type="radio" :id="`${question._id}: ${index}`" :name="question._id" :value="option"/>
      </div> -->
      <div v-for="(option, index) in question.options" :key="index"> 
         <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <input type="radio" :id="`${question._id}: ${index}`" :name="question._id" :value="option" aria-label="Checkbox for following text input">
    </b-input-group-prepend>
    <b-form-input disabled aria-label="Text input with checkbox" class="center" :value="option"></b-form-input>
  </b-input-group>
  
      </div>    
  </div>
</template>

<script>
export default {
    name: "quiz-item",
    props: ["question"]
}
</script>

<style>
.center {
  margin: auto;
}
</style>