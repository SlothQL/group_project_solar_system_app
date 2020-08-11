<template>
  <div id="leaderboard-list">
      <ul v-for="(score, index) in topTen" :key="index">
          <li>{{index + 1}}. {{score.name}}: {{score.score}}</li>
      </ul>
  </div>
</template>

<script>
import PlanetService from "../services/PlanetService.js";
import {eventBus} from "../main.js";

export default {
    name: 'leaderboard',
    data() {
        return {
            leaderboard: [],
            topTen: []
        };
    },
    mounted() {
        PlanetService.getInformation('http://localhost:3000/api/leaderboard/')
        .then(leaderboard => {
            this.leaderboard = leaderboard
        });

        eventBus.$on('leaderboard-added', (leaderboardData) => {
            this.leaderboard.push(leaderboardData);
            this.sortLeaderboard();
        })


    },
    methods: {
        sortLeaderboard() {
            const sortedArray = this.leaderboard.sort(function(a, b){
                return b.score-a.score
            })
            this.topTen = sortedArray.slice(0, 10);
            return this.topTen;
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>