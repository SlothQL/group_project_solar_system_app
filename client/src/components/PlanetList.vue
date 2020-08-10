<template>
    <div id="planets-list">
        <h1>Planets in our Solar System</h1>
        <p>Click on a planet below to find out some fun facts!</p>
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

h1, p {
    color: white;
    text-align: center;
    padding: 10px;
}

#planets-list {
    background-color: black;
}

ul {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>