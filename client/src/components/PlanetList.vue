<template>
    <div id="planets-list">
        <h1>Planets and Dwarf Planets in our Solar System</h1>
        <h5>Click on a planet below to discover some fun facts!</h5>
        <ul>
            <planet-item v-for="(planet, index) in planets" :planet="planet" :key="index"/>
        </ul>
    </div>
</template>

<script>
import PlanetItem from "./PlanetItem.vue";

export default {
    name: "PlanetList",
    
    props: ["planets"],

    components: {
        "planet-item": PlanetItem
    }
}
</script>

<style scoped>

h1, h5 {
    color: white;
    text-align: center;
    padding: 10px;
}

#planets-list {
    padding-top: 80px;
}

ul {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
}
.headline {
    color:white;
    display:inline-block;
}
</style>