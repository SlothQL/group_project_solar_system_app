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

export default {
    name: "PlanetList",

    props: ["planets"],
    

    components: {
        "planet-item": PlanetItem
    }

}
</script>

<style scoped>

#planets-list {
    background-color: black;
}

ul {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>