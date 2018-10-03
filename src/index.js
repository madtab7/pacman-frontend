document.addEventListener('DOMContentLoaded', (event) => {

  //render pacman world
  const world = document.getElementById("pacman-world")

///////////////////COMMMENT BACK IN FOR BACK END ////////////////////////////

// const userId = document.getElementById("highscores").dataset.id
  // world.innerHTML = User.renderForm();
  //
  // document.addEventListener("click", (event)=>{
  //   if (event.target.id === "user-submit"){
  //     const newUserForm = document.getElementById("player")
  //     const userName = document.getElementById("username").value
  //     fetch(`http://localhost:3000/users`, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         name: userName,
  //         high_score: 0
  //       })
  //     })
  //     .then(response => response.json())
  //     .then((jsonUser) =>{
  //       const newUser = new User(jsonUser)
  //       const highscores = document.getElementById("highscores")
  //       highscores.dataset.id = newUser.id
  //     })
  //     renderWorld();
  //   }
  // })

////////////////////////////////////////////////////////////////////////////////////


  let newPacman = new Pacman(86,0)

  document.addEventListener("keydown", (event)=>{
    if(newPacman.coins == 5400){
      // let user = User.findUser(userId)
      // debugger;
      world.innerHTML = newPacman.win()
    }
    const keyName = event.key
    console.log(keyName)
    const counter = document.getElementById("coincountermotherfucker")
    if(event.key === "ArrowUp"){
      let oldPosition = document.getElementById(newPacman.position)
      let predictivePosition = document.getElementById(newPacman.position-19)
      if (predictivePosition.className !== "wall"){
        if(predictivePosition.className == "coin"){
          newPacman.coins += 100
          counter.innerText = `${newPacman.coins}`
        }
        newPacman.position = parseInt(predictivePosition.id)
        oldPosition.removeAttribute("class")
        predictivePosition.removeAttribute("class")
        oldPosition.className = 'ground'
        predictivePosition.className = 'pacman'

      }
    } else if (event.key === "ArrowDown"){
      let oldPosition = document.getElementById(newPacman.position)
      let predictivePosition = document.getElementById(newPacman.position+19)
      if (predictivePosition.className !== "wall"){
        if(predictivePosition.className == "coin"){
          newPacman.coins += 100
          counter.innerText = `${newPacman.coins}`
        }
        newPacman.position = parseInt(predictivePosition.id)
        oldPosition.removeAttribute("class")
        predictivePosition.removeAttribute("class")
        oldPosition.className = 'ground'
        predictivePosition.className = 'pacman'
      }
    } else if(event.key === "ArrowRight"){
      let oldPosition = document.getElementById(newPacman.position)
      let predictivePosition = document.getElementById(newPacman.position+1)
      if (predictivePosition.className !== "wall"){
        if(predictivePosition.className == "coin"){
          newPacman.coins += 100
          counter.innerText = `${newPacman.coins}`
        }
        newPacman.position = parseInt(predictivePosition.id)
        oldPosition.removeAttribute("class")
        predictivePosition.removeAttribute("class")
        oldPosition.className = 'ground'
        predictivePosition.className = 'pacman'
      }
    } else if(event.key === "ArrowLeft"){
      let oldPosition = document.getElementById(newPacman.position)
      let predictivePosition = document.getElementById(newPacman.position-1)
      if (predictivePosition.className !== "wall"){
        if(predictivePosition.className == "coin"){
          newPacman.coins += 100
          counter.innerText = `${newPacman.coins}`
        }
        newPacman.position = parseInt(predictivePosition.id)
        oldPosition.removeAttribute("class")
        predictivePosition.removeAttribute("class")
        oldPosition.className = 'ground'
        predictivePosition.className = 'pacman'
      }
    }

  })


  let ghost1 = new Ghost(64)
  //event listener to start ghost movements
  document.addEventListener("keydown", (event)=>{
    let ghost1Location = document.getElementById(ghost1.position)
    ghost1Location.dataset.id = "ghost"
    let movement = Math.floor(Math.random()*4)+1
    if (movement == 1){
      let oldGhostPosition = document.getElementById(ghost1.position)
      let predictivePosition = document.getElementById(ghost1.position+19)
      if(predictivePosition.className !== "wall"){
        ghost1.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    }
    else if (movement == 2){
      let oldGhostPosition = document.getElementById(ghost1.position)
      let predictivePosition = document.getElementById(ghost1.position-19)
      if(predictivePosition.className !== "wall"){
        ghost1.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    } else if (movement == 3){
      let oldGhostPosition = document.getElementById(ghost1.position)
      let predictivePosition = document.getElementById(ghost1.position+1)
      if(predictivePosition.className !== "wall"){
        ghost1.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    } else if (movement == 4){
      let oldGhostPosition = document.getElementById(ghost1.position)
      let predictivePosition = document.getElementById(ghost1.position-1)
      if(predictivePosition.className !== "wall"){
        ghost1.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    }

    let ghostPosition = document.getElementById(ghost1.position)
    if(ghostPosition.id == newPacman.position){
      world.innerHTML = newPacman.lose()
    }

  })

  let ghost2 = new Ghost(108)
  //event listener for ghost 2
  document.addEventListener("keydown", (event)=>{
    let ghost2Location = document.getElementById(ghost2.position)
    ghost2Location.dataset.id = "ghost"
    let movement = Math.floor(Math.random()*4)+1
    if (movement == 1){
      let oldGhostPosition = document.getElementById(ghost2.position)
      let predictivePosition = document.getElementById(ghost2.position+19)
      if(predictivePosition.className !== "wall"){
        ghost2.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    }
    else if (movement == 2){
      let oldGhostPosition = document.getElementById(ghost2.position)
      let predictivePosition = document.getElementById(ghost2.position-19)
      if(predictivePosition.className !== "wall"){
        ghost2.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    } else if (movement == 3){
      let oldGhostPosition = document.getElementById(ghost2.position)
      let predictivePosition = document.getElementById(ghost2.position+1)
      if(predictivePosition.className !== "wall"){
        ghost2.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    } else if (movement == 4){
      let oldGhostPosition = document.getElementById(ghost2.position)
      let predictivePosition = document.getElementById(ghost2.position-1)
      if(predictivePosition.className !== "wall"){
        ghost2.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    }
    let ghostPosition = document.getElementById(ghost2.position)
    if(ghostPosition.id == newPacman.position){
      world.innerHTML = newPacman.lose()
      // newPacman.coins = user.high_score
    }

  })



});
