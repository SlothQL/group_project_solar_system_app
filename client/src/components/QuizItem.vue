<template>
  <div>
    <h4 for="question"> {{ question.question}}</h4>
      <div v-for="(option, index) in question.options" :key="index">
        <p>{{option}}</p>  
        <input type="radio" :id="`${question._id}: ${index}`" :name="question._id" :value="option"/>
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

</style>