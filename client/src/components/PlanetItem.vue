<template>
  <div class="img-list">
    <img v-on:click="handleClick" class="img" 
    :src="require(`../assets/planets_images/${planet.englishName.replace(/\s/g, '-')}.jpg`)" alt="Image of planet"/>
    <p class="planet-name">{{planet.englishName}}</p>
  </div>


</template>

<script>
import { eventBus } from "@/main.js";
export default {
    name: "PlanetItem",

    props: ["planet"],
    
    methods: {
    handleClick() {
      eventBus.$emit("selected-planet", this.planet);
    },
    }
}

</script>

<style scoped>
.img {
    height: 160px;
    width: 200px;
    /* margin-right: 30px; */
    text-align: center;
    }

.planet-name {
    color: white;
    text-align: center;
    list-style: none;
    text-align: center;
}

.img-list:hover {
    cursor: pointer;
}

</style>