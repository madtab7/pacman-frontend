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
  ], 5400
)

const level2 = new Map (2,
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8], /// level 2
    [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,8],
    [1,2,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,2,1,8],
    [1,2,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,2,1,8],
    [1,2,2,2,2,2,2,1,1,5,1,1,2,2,2,2,2,2,1,8],
    [1,2,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,2,1,8],
    [1,2,2,1,2,1,1,2,2,1,2,2,1,1,2,1,2,2,1,8],
    [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,8],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8]
  ], 8400
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
      renderWorld(level1);
      let ghost1 = new Ghost(64)
      let ghost2 = new Ghost(108)
      ghostMovement(ghost1)
      ghostMovement(ghost2)
      pacmanPlay(level1);
    }
    return
  })

// ////////////////////////////////////////////////////////////////////////////////////
///display top 5 scores:
let topScores = document.getElementById("highscores")
  // topScores.innerHTML += User.topFive()




//replay same level on click after losing
document.addEventListener("click", (event)=>{
  if (event.target.id === "playagain"){
    renderWorld(level1);
    pacmanPlay(level1);
    newPacman.resetPosition()
  }
})



//level up on click once level is complete
document.addEventListener("click", (event)=>{
  if (event.target.id === "levelup"){
    world.innerHTML = null;
    pacmanPlay(level2);
    renderWorld(level2);
    let ghostPosition = document.getElementById(ghostObj.position)
    newPacman.resetPosition()
    // let ghost1 = new Ghost(64)
    // let ghost2 = new Ghost(108)
    // ghostMovement(ghost1)
    // ghostMovement(ghost2)

  }
})

});
