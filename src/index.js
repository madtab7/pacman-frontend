document.addEventListener('DOMContentLoaded', (event) => {

  //render pacman world
  const world = document.getElementById("pacman-world")
  let maxCoins = 400

  const map =[
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
  ],
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
  ]
] // END MAP ARRAYS

// 1 -- wall
// 2 -- coin
// 3 -- ground
// 5 -- pacman
// 8 -- linebreak

function renderWorld(levelIndex){
  world.innerHTML = ''; //empty from previous
  let level = document.getElementById("level")
    level.innerText = levelIndex + 1
  var counter = 1;
  // if (levelIndex == 0){
  //   if(newPacman.coins == 400){
  //     // let user = User.findUser(userId)
  //     // debugger;
  //     world.innerHTML = newPacman.win()
  //   }
  // } else if(levelIndex == 1){
  //   if(newPacman.coins == 8400){
  //     world.innerHTML = newPacman.win()
  //   }
  // }
  for (let y=0; y< map[levelIndex].length; y++){
    for (let x=0; x< map[levelIndex][y].length; x++){
      if(map[levelIndex][y][x] === 1){
        world.innerHTML += `<div id=${counter} class='wall'></div>`
        counter +=1;
      } else if(map[levelIndex][y][x] === 2){
        world.innerHTML += `<div id=${counter} class='coin'></div>`
        counter +=1;
      } else if(map[levelIndex][y][x]===3){
        world.innerHTML += `<div id=${counter} class='ground'></div>`
        counter +=1;
      } else if(map[levelIndex][y][x] === 5){
        world.innerHTML += `<div id=${counter} class='pacman'></div>`
        counter +=1;
      } else if(map[levelIndex][y][x] === 8){
        world.innerHTML += "<br>"
      }
    }
  }
}
renderWorld(0);

///////////////////COMMMENT BACK IN FOR BACK END ////////////////////////////
//
// const userId = document.getElementById("highscores").dataset.id
//   world.innerHTML = User.renderForm();
//
//   document.addEventListener("click", (event)=>{
//     if (event.target.id === "user-submit"){
//       const newUserForm = document.getElementById("player")
//       const userName = document.getElementById("username").value
//       fetch(`http://localhost:3000/users`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: userName,
//           high_score: 0
//         })
//       })
//       .then(response => response.json())
//       .then((jsonUser) =>{
//         const newUser = new User(jsonUser)
//         const highscores = document.getElementById("highscores")
//         highscores.dataset.id = newUser.id
//       })
//       renderWorld(0);
//     }
//   })

////////////////////////////////////////////////////////////////////////////////////


  let newPacman = new Pacman(86,0)

  document.addEventListener("keydown", (event)=>{
      if(newPacman.coins == maxCoins){
        // let user = User.findUser(userId)
        world.innerHTML = newPacman.win()
      }

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


  //level up on click once level is complete
  document.addEventListener("click", (event)=>{
    if (event.target.id === "levelup"){
      const scriptToRemove = document.getElementById("getrideofthisscript")
      const scriptToAdd = document.getElementById("thisisgoingtobethenewscript")
      // window.location.reload(true)
      scriptToRemove.innerHTML = ''
      // let newScript = document.createElement("script")
      // newScript.i = "src/index2.js"
      scriptToAdd.innerHTML = `<script tag="this-script" id="script-level" src="src/index2.js">`
      // document.location.replace('file:///Users/maddytabing/Development/mod3/pacman_frontend/index.html');
      // document.location.assign('file:///Users/maddytabing/Development/mod3/pacman_frontend/index.html');
      // document.location.reload()

      // scripts[4].src = "src/index2.js"
      // scripts[4].src = "src/index2.js"

      newPacman.coins = 0
      // renderWorld(1)

      // setInterval(function(){
      //   debugger;
      //   let levelScript = document.head.getElementById("script-level")
      //   let head = document.getElementsByTagName('head')[0]
      //   head.removeChild(levelScript)
      //   let newScript = document.createElement("script")
      //   newScript.src = "src/index2.js"
      //   head.appendChild(newScript)
      //
      // },1000)
        // levelScript.src = "src/index2.js"
      // let newScript = document.createElement("script")
      //   newScript.src = "src/index2.js"
      // debugger;
      // levelScript.parentElement.appendChild(newScript)
      // levelScript.parentElement.removeChild(levelScript)

      // location.reload();
      // world.innerHTML = null
      // let newPacman = new Pacman(86,400)
      // let ghost2 = new Ghost(108)
      // let ghost1 = new Ghost(64)
      // let maxCoins = 8400
      // renderWorld(1);
      // debugger;
    }
  })

  //replay same level on click after losing
  document.addEventListener("click", (event)=>{
    if (event.target.id === "playagain"){
      newPacman.coins = 0
      world.innerHTML = null
      renderWorld(0);
    }
  })



});
