<template>
    <div class="planet-details-wrapper">
        <h2>{{ planet.englishName }}</h2>
        <p>Discovery Date: {{ planet.discoveryDate }}</p>
        <p>Disocvered By: {{ planet.discoveredBy }}</p>
        <p>Radius: {{ planet.meanRadius }} km</p>
        <p>Distance From Sun: {{ planet.perihelion }}.</p>
        <div v-if="planet.englishName === Jupiter">
            It is the biggest planet in the solar system! It is so big that more than 1300 Earths could fit inside it.
        </div>
        <div v-if="planet.englishName === Mars">Also known as the "Red Planet", {{ planet.englishName}} is the second smallest planet.
        </div>
        <div v-if="planet.englishName === Uranus">It spins lying on its side </div>
        <div v-if="planet.englishName === Pluto">It is the smallest planet in the solar system - and is known as a Dwarf Planet.</div>
        <div v-if="planet.englishName === Neptune">It is a large planet, nearly four times the size of Earth.</div>
        <div v-if="planet.englishName === Saturn">
            This makes it the second biggest planet in the solar system.
            <button class="sound" @click.prevent="playSound('./assets/saturn_sound.mp3')">Play Planet Sound</button>
        </div>
        <div v-if="planet.englishName === Mercury">It is a small planet which orbits closer to the sun than any other planet in our solar system.</div>
        <div v-if="planet.englishName === Venus">This makes it slightly smaller than Earth!</div>
        <div v-if="planet.englishName === Earth">It is the biggest planet in the solar system! It is more than 300 times larger than Earth</div>
        <p>It has {{ planet.moons.length }} moons. </p>
        <p>It takes {{ planet.sideralOrbit }} days to fully orbit the sun - wow! </p>
    </div>
</template>

<script>

export default {
    name: "planet-detail",
    props: ["planet"],

    methods: {
        playSound(sound) {
            if(sound) {
                let audio = new Audio(sound);
                audio.play();
            }
        }
    }
}

</script>

<style>

</style>