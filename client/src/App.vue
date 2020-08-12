<template>

  <div class="wrap-app">
        <div class="heading-wrap">
        <heading></heading>
        </div>
        <div class="stars">
            <div class="list-all-planets">
                <planet-list :planets='planets'></planet-list>
            </div>
             <div v-if="selectedPlanet" :class="detailState">
                <planet-detail :planet='selectedPlanet' :moons='moons' :detailState='detailState'></planet-detail> 
            </div>
            <div class="quiz-button center-button">  
                <input type="button" class="btn-quiz" @click="handleClick" value="Test your knowledge" />
            </div>
            <div :class="quizState">
                <quiz :key="componentKey"></quiz>
            </div>
            <div :class="resultState">
                <leaderboard></leaderboard>
                <quiz-result></quiz-result>
            </div>
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
import QuizResult from './components/QuizResult.vue';

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
            resultState: "hide",
            componentKey: 0
        }
    },
    components: {
        'planet-list': PlanetList,
        'planet-detail': PlanetDetail,
        'heading': Header,
        'quiz': Quiz,
        'leaderboard': Leaderboard,
        'quiz-result': QuizResult
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
                if (this.resultState === "show") {
                    this.resultState = "hide";
                    this.detailState = "show";
                }
            })

            eventBus.$on('quiz-state', (state) => {
                this.quizState = state;
                this.resultState = "show";
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
        forceRerender() {
            this.componentKey += 1;
        },
        handleClick() {
            this.quizState = "show";
            this.detailState = "hide";
            this.forceRerender();
            if (this.resultState === "show") {
                this.resultState = "hide";
            }
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
        margin-top: 10px;
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

    .stars {
        background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
    }

    .btn-quiz {
        margin: 40px;
        padding: 7px 10px;
        border: none;
        border-radius: 7%;
        background-color: rgb(95, 95, 202);
        color: white;
        font-size: 20px;
        cursor: pointer;
    }

    .btn-quiz:hover {
        background-color: rgb(123, 123, 204);    
    }

input[type="button"] {
    outline: none !important;
    box-shadow: none !important;
} 

</style>