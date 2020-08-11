<template>
  <div id="leaderboard-list">
      <ul v-for="(score, index) in leaderboard" :key="index">
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
            leaderboard: []
        };
    },
    mounted() {
        PlanetService.getInformation('http://localhost:3000/api/leaderboard/')
        .then(leaderboard => {
            this.leaderboard = leaderboard
        });

        eventBus.$on('leaderboard-added', (leaderboardData) => {
            this.leaderboard.push(leaderboardData)
        })

    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>