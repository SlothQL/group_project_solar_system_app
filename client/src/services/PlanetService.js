export default {

getInformation (url) {
 return fetch(url)
 .then(res => res.json())
},

postInformation(payload) {
    return fetch('http://localhost:3000/api/leaderboard/', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

}