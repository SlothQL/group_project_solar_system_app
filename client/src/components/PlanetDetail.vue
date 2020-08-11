<template>
    <div class="planet-details-wrapper">
        <h2>{{ planet.englishName }}</h2>
        <p>Discovery Date: {{ planet.discoveryDate }}</p>
        <p>Disocvered By: {{ planet.discoveredBy }}</p>
        <p>Radius: {{ planet.meanRadius }} km</p>
        <p>Distance From Sun: {{ planet.perihelion }} km</p>
        <p>Gravity: {{ planet.gravity }} m/s 2</p>
        <div v-if="planet.moons !== null">
        <p>It has {{ planet.moons.length }} moons. </p>
            <label for="moonList">All Moons</label>
            <select id="moonList">
                <option v-for="(moon, index) in planet.moons" :key="index" :moon="moon"> {{ moon.moon}} </option>
            </select>
        </div>
        <p>It takes {{ planet.sideralOrbit }} days to fully orbit the sun - wow! </p>
        <div v-if="planet.englishName === 'Jupiter'">
            <ul>
                <li>It is the biggest planet in the solar system! It is so big that more than 1300 Earths could fit inside it.</li>
                <li>As well as having many moons, Jupiter also has a number of rings similar to that of Saturn but much less noticeable.</li>
            </ul>
        </div>
        <div v-if="planet.englishName === 'Mars'">
            <ul>
                <li>Also known as the "Red Planet", {{ planet.englishName}} is the second smallest planet.</li>
                <li>It has a dusty, rocky surface and a thin atmosphere, and is the most likely destination for future planet exploration by humans!</li>
            </ul>
        </div>
        <div v-if="planet.englishName === 'Uranus'">
            <ul>
                <li>{{ planet.englishName}} spins lying on its side, unlike Earth and the other planets!</li>
                <li>It shows off a majestic blue/green haze due to its high levels of methane gas.</li>
            </ul>
        </div>
        <div v-if="planet.englishName === 'Pluto'">
            <ul>
                <li>It is the smallest and furtherst planet from the sun - and is now known as a Dwarf Planet.</li>
                <li>Because it is so far away from the sun it is very cold with temperatures ranging from -235 Degrees Celsius to -210 Degrees Celsius - now that's cold!</li>
            </ul>
        </div>
        <div v-if="planet.englishName === 'Neptune'">
            <ul>
                <li>{{ planet.englishName}} is a large planet, nearly four times the size of Earth.</li>
                <li>It is the furterst away planet from the sun, and suffers the most violent weather in our Solar System.</li>
            </ul>
        </div>
        <div v-if="planet.englishName === 'Saturn'">
            <ul>
                <li>{{ planet.englishName}} is the second biggest planet in the solar system.</li>
                <li>It is known as a gas giant, and has many extreme atmospeheric conditions - storm winds race around the atmosphere! </li>
            </ul>
            <audio controls>
                <source src="@/assets/planet_sounds/saturn_sound.mp3" type="audio/mp3" id="track"/>
            </audio>
            <!-- <button class="sound" @click.prevent="playSound('@/assets/saturn_sound.mp3')">Play Planet sound
            </button> -->
        </div>
        <div v-if="planet.englishName === 'Mercury'">
            <ul>
                <li>{{ planet.englishName }} is a small planet which orbits closer to the sun than any other planet in our solar system.</li>
                <li>It has no atmosphere which means there is no wind or weather.</li>
                <li>it is so close to the sun that the daytime temperature on Mercury is scorching - reaching over 400 Degrees Celsius.</li>
            </ul>
        </div>
        <div v-if="planet.englishName === 'Venus'">
            <ul>
                <li>{{ planet.englishName}} is only slightly smaller than Earth - but it is very different in regards to atmosphere and surface conditions!</li>
                <li>It's surface is often described as a "stormy desert" full of many craters and very active volcanoes.</li>
            </ul>
        </div>
        <div v-if="planet.englishName === 'Earth'">
            <ul>
                <li>Where you currently live! {{ planet.englishName }} has more exposed water than land.</li>
                <li>Three quarters of the Earth is covered by water and has one moon.</li>
            </ul>
        </div>
    </div>
</template>

<script>
require('howler');

export default {
    name: "planet-detail",
    props: ["planet"],

    methods: {
        playSound(file_path) {
            var sound = new Howl({
                src: file_path,
                volume: 0.5,
            });
            sound.play();
            this.playSound(file_path);
        }
    }
}

</script>

<style scoped>
.planet-details-wrapper {
    text-align: center;
    font-family: 'Playfair Display', serif;
    background-color: black;
    color: #ffffff;
}
.li {
    list-style-type: none;
}

</style>