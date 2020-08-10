<template>
  <div>
    <img v-on:click="handleClick" class="img" 
    :src="require(`../assets/planets_images/${planet.englishName.replace(/\s/g, '-')}.jpg`)" alt="Image of planet"/>
    <li class="planet-name">{{planet.englishName}}</li>
    
  </div>


</template>

<script>
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
   img {
        height: 100px;
        width: 120px;
    }
</style>