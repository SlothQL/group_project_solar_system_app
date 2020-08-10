<template>
    <div id="planets-list">
        <h1>Planets in our Solar System</h1>
        <ul>
            <planet-item v-for="(planet, index) in planets" :planet="planet" :key="index"/>
        </ul>
    </div>
</template>

<script>
import PlanetItem from "./PlanetItem.vue";
import { eventBus } from "@/main.js";


export default {
    name: "PlanetList",

    props: ["planets"],
    

    components: {
        "planet-item": PlanetItem
    },

    data() {
        return {
            planets: []
        }
    },

    // mounted() {
    //     PlanetService.getPlanets()
    //     .then(data => this.planet = data);
    // }
}
</script>