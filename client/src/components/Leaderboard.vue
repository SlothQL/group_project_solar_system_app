<template>
  <div>
      <div id="leaderboard-list">
          <div class="list-topten">
            <h4 class="leaderboard-headline">Leaderboard - Top Ten</h4>
            <ul v-for="(score, index) in topTen" :key="index">
                <li class="topten-list">{{index + 1}}. {{score.name}}: {{score.score}}</li>
            </ul>
        </div>
      </div>
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

#leaderboard-list {
    color:#ffffff;
    background-color: rgba(255, 255, 255, .25);
    font-size: 20px;
} 

.list-topten {
    padding: 15px 20px 15px 0px;
    text-align: center;
}

.leaderboard-headline {
    padding-left: 20px;
    padding-bottom: 20px;
    text-align: center;
}

.topten-list {
    font-size: 18px;
    margin-left: -12px;
}

</style>