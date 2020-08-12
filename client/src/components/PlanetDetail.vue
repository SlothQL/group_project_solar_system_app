<template>
    <div class="planet-details-wrapper">
        <h2>{{ planet.englishName }}</h2>
        <p v-if="planet.englishName === 'Pluto' || planet.englishName === '1 Ceres' || planet.englishName === '136199 Eris' || planet.englishName === '136108 Haumea' || planet.englishName === '136472 Makemake'">{{planet.englishName}} is one of the five Dwarf Planets in our Solar System.</p>
        <p v-if="planet.discoveryDate !== ''">Discovery Date: {{ planet.discoveryDate }}</p>
        <p v-if="planet.discoveredBy !== ''">Discovered By: {{ planet.discoveredBy }}</p>
        <p>Radius: {{ planet.meanRadius }} km</p>
        <p>Distance From Sun: {{ planet.perihelion }} km</p>
        <p>Gravity: {{ planet.gravity }} m/s 2</p>
        <div v-if="planet.moons !== null">
        <p v-if="planet.moons.length > 1">It has {{ planet.moons.length }} moons. </p>
        <p v-if="planet.moons.length === 1">It has {{ planet.moons.length }} moon. </p>
            <label for="moonList">All Moons</label>
            <select id="moonList">
                <option v-for="(moon, index) in planet.moons" :key="index" :moon="moon"> {{ moon.moon}} </option>
            </select>
        </div>
        <p>It takes {{ planet.sideralOrbit }} days to fully orbit the sun - wow! </p>
        <h4>Top Facts:</h4>
        <div v-if="planet.englishName === 'Jupiter'">
            <ul>
                <li>It is the biggest planet in the solar system! It is so big that more than 1300 Earths could fit inside it.</li>
                <li>As well as having many moons, Jupiter also has a number of rings similar to that of Saturn but much less noticeable.</li>
            </ul>
            <div class="sound">
                <p>Press Play To Hear The Sounds of Jupiter.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/jupiter_sound.wav" type="audio/wav" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Mars'">
            <ul>
                <li>Also known as the "Red Planet", {{ planet.englishName}} is the second smallest planet.</li>
                <li>It has a dusty, rocky surface and a thin atmosphere, and is the most likely destination for future planet exploration by humans!</li>
            </ul>
             <div class="sound">
                <p>Press Play To Hear The Sounds of Mars.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/mars_sound.wav" type="audio/wav" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Uranus'">
            <ul>
                <li>{{ planet.englishName}} spins lying on its side, unlike Earth and the other planets!</li>
                <li>It shows off a majestic blue/green haze due to its high levels of methane gas.</li>
            </ul>
            <div class="sound">
                <p>Press Play To Hear The Sounds of Uranus.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/uranus_sound.mp3" type="audio/mp3" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Pluto'">
            <ul>
                <li>Pluto is one of the dwarf planets.</li>
                <li>It is the smallest and furtherst planet from the sun - and is now known as a Dwarf Planet.</li>
                <li>Because it is so far away from the sun it is very cold with temperatures ranging from -235 Degrees Celsius to -210 Degrees Celsius - now that's cold!</li>
            </ul>
            <div class="sound">
                <p>Press Play To Hear The Sounds of Pluto.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/pluto_sound.mp3" type="audio/mp3" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Neptune'">
            <ul>
                <li>{{ planet.englishName}} is a large planet, nearly four times the size of Earth.</li>
                <li>It is the furterst away planet from the sun, and suffers the most violent weather in our Solar System.</li>
            </ul>
            <div class="sound">
                <p>Press Play To Hear The Sounds of Neptune.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/pluto_sound.mp3" type="audio/mp3" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Saturn'">
            <ul>
                <li>{{ planet.englishName}} is the second biggest planet in the solar system.</li>
                <li>It is known as a gas giant, and has many extreme atmospeheric conditions - storm winds race around the atmosphere! </li>
            </ul>
             <div class="sound">
                <p>Press Play To Hear The Sounds of Saturn.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/saturn_sound.mp3" type="audio/mp3" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Mercury'">
            <ul>
                <li>{{ planet.englishName }} is a small planet which orbits closer to the sun than any other planet in our solar system.</li>
                <li>It has no atmosphere which means there is no wind or weather.</li>
                <li>It is so close to the sun that the daytime temperature on Mercury is scorching - reaching over 400 Degrees Celsius.</li>
            </ul>
            <div class="sound">
                <p>Press Play To Hear The Sounds of Mercury.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/mercury_sound.mp3" type="audio/mp3" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Venus'">
            <ul>
                <li>{{ planet.englishName}} is only slightly smaller than Earth - but it is very different in regards to atmosphere and surface conditions!</li>
                <li>It's surface is often described as a "stormy desert" full of many craters and very active volcanoes.</li>
            </ul>
            <div class="sound">
                <p>Press Play To Hear The Sounds of Venus.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/venus_sound.mp3" type="audio/mp3" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === 'Earth'">
            <ul>
                <li>Where you currently live! {{ planet.englishName }} has more exposed water than land.</li>
                <li>Three quarters of the Earth is covered by water and has one moon.</li>
            </ul>
            <div class="sound">
                <p>Press Play To Hear The Sounds of Earth.</p>
                <audio controls>
                    <source src="@/assets/planet_sounds/earth_sound.mp3" type="audio/mp3" id="track"/>
                </audio>
            </div>
        </div>
        <div v-if="planet.englishName === '136199 Eris'">
            <ul>
                <li>Eris is one of the largest known dwarf planets in our solar system.</li>
                <li>It's about the same size as Pluto, but is three times farther from the Sun!</li>
            </ul>
        </div>
        <div v-if="planet.englishName === '1 Ceres'">
            <ul>
                <li>In 2006, Ceres was reclassified as a dwarf planet — the closest one to Earth!</li>
                <li>Scientists would like to search for possible signs of life on Ceres. It has something many other planets don't: water.</li>
            </ul>
        </div>
        <div v-if="planet.englishName === '136108 Haumea'">
            <ul>
                <li>Haumea is another dwarf palnet - and the least spherical of them all!</li>
                <li>You can recognize Haumea because of its elongated shape.</li>
                <li>A day on Haumea lasts only four Earth hours, making it one of the fastest rotating large objects in our solar system.</li>
            </ul>
        </div>
        <div v-if="planet.englishName === '136472 Makemake'">
            <ul>
                <li>Makemake is the second furthest dwarf planet from the Sun and is the third largest dwarf planet in the solar system.</li>
                <li>It has an average surface temperature -239°C.This is because of its huge distance from the Sun.</li>
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
    color: #ffffff;
    margin-top: 60px;
}
.ul {
    list-style-type: none;
}

.sound {
    width: 50%;
    text-align: center;
    margin: auto;
}

label {
    margin-right: 15px;
}

.planet-details-wrapper p {
    font-size: 18px;
}
</style>