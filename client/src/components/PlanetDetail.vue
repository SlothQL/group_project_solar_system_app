<template>
    <div class="planet-details-wrapper">
        <h2>{{ planet.englishName }}</h2>
        <p>Discovered By: {{ planet.discoveredBy }}</p>
        <p>Discovery Date: {{ planet.discoveryDate }}</p>
        <p>{{ planet.name }} has a radius of {{ planet.meanRadius }}</p>
        <p v-if="planet.englishName === Jupiter">It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Mars"> has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Uranus">  has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Pluto">  has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Neptune">  has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Saturn"> has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Mercury">  has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Venus">  has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
        <p v-if="planet.englishName === Earth">  has a radius of {{ planet.meanRadius }}. It is the biggest planet in the solar system! It is more than 300 times larger than Earth
    </div>
</template>

<script>
export default {
    name: "planet-detail",
    props: ["planet"]
}
</script>

<style>

</style>