class User {
  constructor(userJsonObj){
    this.id = userJsonObj.id,
    this.name = userJsonObj.name,
    this.high_score = userJsonObj.high_score,
    User.all.push(this)
  }

  static renderForm(){
    return `
    <form id="player">
      PLAYER NAME: <input type="text" id="username"></input>
      <button type="submit" id="user-submit" value="Submit">submit</button>
    </form>
    `
  }

  static findUser(id){
    return User.all.find((user)=> user.id == id)
  }

  static updateLoss(player){
    player.high_score = newPacman.coins
    fetch(`http://localhost:3000/users/${player.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        high_score: player.high_score
      })
    })
    .then((response) => { return response.json()})
  }

  static updateWin(player){
    player.high_score = newPacman.coins
    fetch(`http://localhost:3000/users/${player.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        high_score: player.high_score
      })
    })
    .then((response) => { return response.json()})
  }


  static topFive(){
    fetch('http://localhost:3000/users/')
      .then(response => response.json())
      .then((jsonData) =>{
        let sortedData = jsonData.sort(function(a,b){
          return b.high_score - a.high_score
        })
        let sorted = sortedData.slice(0,5)
        let sortedArr = sorted.map((player)=>{
          return player.name
        })
        sortedArr.forEach((player)=>{
          return `<li>${player.name}</li>`
        })
      })
  }



}

User.all = [];
