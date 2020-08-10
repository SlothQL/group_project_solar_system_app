<template>
  <div>
    <img v-on:click="handleClick" class="img" 
    :src="require(`../assets/planets_images/${planet.englishName.replace(/\s/g, '-')}.jpg`)" alt="Image of planet"/>
    <li class="planet-name">{{planet.englishName}}</li>
    
  </div>


</template>

<script>
import { eventBus } from "@/main.js";
export default {
    name: "PlanetItem",

    props: ['planet', 'detailState'],
    
    methods: {
      handleClick() {
        eventBus.$emit("selected-planet", this.planet);
        eventBus.$emit("detail-state", "show");
      }
    }
}

</script>

<style scoped>
   img {
        height: 100px;
        width: 120px;
    }
</style>m