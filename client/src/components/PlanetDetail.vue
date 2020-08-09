<template>
    <div class="planet-details-wrapper">
        <h2>{{ planet.englishName }}</h2>
        <p> {{ planet.Englishname }} was discovered by {{ planet.discoveredBy }} on {{ planet.discoveryDate }}</p>
        <p>{{ planet.name }} has a radius of {{ planet.meanRadius }}.</p>
        <p v-if="planet.englishName === Jupiter">It is the biggest planet in the solar system! It is so big that more than 1300 Earths could fit inside it.</p>
        <p v-if="planet.englishName === Mars">Also known as the "Red Planet", {{ planet.englishName}} is the second smallest planet.</p>
        <p v-if="planet.englishName === Uranus">It spins lying on its side </p>
        <p v-if="planet.englishName === Pluto">It is the smallest planet in the solar system - and is known as a Dwarf Planet.</p>
        <p v-if="planet.englishName === Neptune">It is a large planet, nearly four times the size of Earth.</p>
        <p v-if="planet.englishName === Saturn">This makes it the second biggest planet in the solar system. </p>
        <p v-if="planet.englishName === Mercury">It is a small planet which orbits closer to the sun than any other planet in our solar system.</p>
        <p v-if="planet.englishName === Venus">This makes it slightly smaller than Earth!</p>
        <p v-if="planet.englishName === Earth">It is the biggest planet in the solar system! It is more than 300 times larger than Earth</p>
        <p>It has {{ planet.moons.length }} moons. </p>
        <p>It takes {{ planet.sideralOrbit }} days to fully orbit the sun - wow! </p>
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