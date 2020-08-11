<template>

  <div class="wrap-app">
        <heading></heading>
        <div class="list-all-planets">
            <planet-list :planets='planets'></planet-list>
        </div>
        <div v-if="selectedPlanet" :class="detailState">
            <planet-detail :planet='selectedPlanet' :moons='moons' :detailState='detailState'></planet-detail> 
        </div>
        <div class="quiz-button center-button">  
            <button @click="handleClick">Test your knowledge</button>
        </div>
        <div :class="quizState">
            <quiz></quiz>
        </div>
        <div :class="resultState">
            <leaderboard></leaderboard>
        </div>
  </div>

</template>

<script>
import { eventBus } from './main.js';
import Header from './components/Header.vue';
import PlanetList from './components/PlanetList.vue';
import PlanetDetail from './components/PlanetDetail.vue';
import Quiz from './components/Quiz.vue';
import Leaderboard from './components/Leaderboard.vue';

export default {
    name: 'app',
    data() {
        return {
            planets: [],
            moons: [],
            selectedPlanet: null,
            allData: [],
            quizState: "hide",
            detailState: "show",
            resultState: "hide"
        }
    },
    components: {
        'planet-list': PlanetList,
        'planet-detail': PlanetDetail,
        'heading': Header,
        'quiz': Quiz,
        'leaderboard': Leaderboard
    },

    mounted() {
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
            .then(res => res.json())
            .then(data => {
                this.allData = data.bodies;
                this.getPlanets();
                this.getMoons();
            })
            .catch(err => console.log(err));

            eventBus.$on('selected-planet', (planet) => {
                this.selectedPlanet = planet;
            })

            eventBus.$on('detail-state', (state) => {
                if (this.quizState === "show") {
                    if (window.confirm("This would end the quiz. Are you sure you want to leave?")) {
                    this.detailState = state;
                    this.quizState = "hide";
                    }
                }
            })

            eventBus.$on('quiz-state', (state) => {
                this.quizState = state;
                this.resultState = "show";
                this.detailState = "show";
            })
    },
    methods: {
        getPlanets() {
            this.planets = this.allData.filter(planet => planet.isPlanet);
            return this.planets;
        },
        getMoons() {
            this.moons = this.allData.filter(planet => !planet.isPlanet);
            return this.moons;
        },
        handleClick() {
            this.quizState = "show";
            this.detailState = "hide"
        }
    }
}
</script>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    p, h1, h2, h3 {
        transform: scale(1, 1.1);
    }

    .hide {
        display: none;
    }

    .show {
    
    }

    .center-button {
        margin: auto;
        width: 50%;
        padding: 10px;
        text-align: center;
    }
</style>