<template>
  <div class="wrap-app">
        <!-- <header></header>
        <div class="list-all-planets">
            <planet-list :planets='planets'></planet-list>
        </div>
        <div>
            <planet-detail :planet='selectedPlanet' :moons='moons'></planet-detail> 
        </div> -->
  </div>
</template>

<script>
//import { eventBus } from './main.js';
//import Header from './components/Header.vue';
//import PlanetList from './components/PlanetList.vue';
// import PlanetDetail from './components/PlanetDetail.vue';
export default {
    name: 'app',
    data() {
        return {
            planets: [],
            moons: [],
            selectedPlanet: null,
            allData: []
        }
    },
    /*components: {
        'planet-list': PlanetList,
        'planet-detail': PlanetDetail,
        'header': Header
    },*/
    mounted() {
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
            .then(res => res.json())
            .then(data => {
                this.allData = data.bodies;
                this.getPlanets();
                this.getMoons();
            })
            .catch(err => console.log(err));

            /*eventBus.$on('selected-planet', (planet) => {
                this.selectedPlanet = planet;
            })*/
    },
    methods: {
        getPlanets() {
            this.planets = this.allData.filter(planet => planet.isPlanet);
            return this.planets;
        },
        getMoons() {
            this.moons = this.allData.filter(planet => !planet.isPlanet);
            return this.moons;
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

</style>