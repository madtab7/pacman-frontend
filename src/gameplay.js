document.addEventListener("DOMContentLoaded", (event) => {

const world = document.getElementById("pacman-world")

// 1 -- wall
// 2 -- coin
// 3 -- ground
// 5 -- pacman
// 8 -- linebreak

const level1 = new Map(1,
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8], /// level 1
    [1,1,1,1,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,8],
    [1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,8],
    [1,1,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,1,1,8],
    [1,1,1,1,2,2,2,1,1,5,1,1,2,2,2,1,1,1,1,8],
    [1,1,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,1,1,8],
    [1,1,1,1,2,1,1,2,2,1,2,2,1,1,2,1,1,1,1,8],
    [1,1,1,1,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,8],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8]
  ], 400, 86, 0, 64, 108
)

const level2 = new Map (1,
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8], /// level 2
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,8],
    [1,2,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,2,1,8],
    [1,2,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,2,1,8],
    [1,2,2,2,2,2,2,1,1,5,1,1,2,2,2,2,2,2,1,8],
    [1,2,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,2,1,8],
    [1,2,2,1,2,1,1,2,2,1,2,2,1,1,2,1,2,2,1,8],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,8],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8]
  ], 8600, 86, 0, 64, 108
)

// ///////////////////COMMMENT BACK IN FOR BACK END ////////////////////////////

  world.innerHTML = User.renderForm();

  document.addEventListener("click", (event)=>{
    if (event.target.id === "user-submit"){
      event.preventDefault()
      const newUserForm = document.getElementById("player")
      const userName = document.getElementById("username").value
      fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userName,
          high_score: 0
        })
      })
      .then(response => response.json())
      .then((jsonUser) =>{
        const newUser = new User(jsonUser)
        const counter = document.getElementById("counter")
          counter.dataset.id = newUser.id
        const userBox = document.getElementById("username")
          userBox.dataset.id = newUser.id
          userBox.innerText = newUser.name
      })
      // const counterContainer = document.getElementById("counter")
      // let userNum = counterContainer.dataset.id
      var audio = new Audio('sounds/pacman_beginning.wav');
      audio.play();
      renderWorld(level2);
      pacmanPlay(level2);
    }
  })

// ////////////////////////////////////////////////////////////////////////////////////

// ///display top 5 scores:
// let topScores = document.getElementById("highscores")
//   fetch('http://localhost:3000/users/')
//     .then(response => response.json())
//     .then((jsonData) =>{
//       let sortedData = jsonData.sort(function(a,b){
//         return b.high_score - a.high_score
//       })
//       let sorted = sortedData.slice(0,5)
//       let sortedArr = sorted.map((player)=>{
//         return player.name
//       })
//       // debugger;
//       sortedArr.forEach((player)=>{
//         debugger;
//         topScores.innerHTML += `<li>${player.name}</li>`
//       })
//     })

  // topScores.innerHTML += User.topFive()




//replay same level on click after losing
document.addEventListener("click", (event)=>{
  if (event.target.id === "playagain"){
    // renderWorld(level1);
    // pacmanPlay(level1);
    // Pacman.resetPosition()
    location.reload()
  }
})



//level 2 on click once level is complete
document.addEventListener("click", (event)=>{
  if (event.target.id === "levelup"){
    // world.innerHTML = null;
    // Map.clear()
    // renderWorld(level2);
    // Pacman.resetPosition()
    // pacmanPlay(level2);
    location.reload()

  }
})

});
