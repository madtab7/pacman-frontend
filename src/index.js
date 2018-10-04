  //render pacman world
const world = document.getElementById("pacman-world")

///display top 5 scores:
let topScores = document.getElementById("highscores")
  fetch('http://localhost:3000/users/')
    .then(response => response.json())
    .then((jsonData) =>{
      let sortedData = jsonData.sort(function(a,b){
        return b.high_score - a.high_score
      })
      let sorted = sortedData.slice(0,5)
      // let sortedArr = sorted.map((player)=>{
      //   return player.name
      // })
      // debugger;
      let topScores = document.getElementById("highscores")
      sorted.forEach((player)=>{
        topScores.innerHTML += `<li>${player.name} - ${player.high_score}</li>`
      })
    })


function renderWorld(mapObj){
  const world = document.getElementById("pacman-world")
  world.innerHTML = ''; //empty from previous
  let level = document.getElementById("level")
  level.innerText = mapObj.id
  var counter = 1;
  for (let y=0; y< mapObj.array.length; y++){
    for (let x=0; x< mapObj.array[y].length; x++){
      if(mapObj.array[y][x] === 1){
        world.innerHTML += `<div id=${counter} class='wall'></div>`
        counter +=1;
      } else if(mapObj.array[y][x] === 2){
        world.innerHTML += `<div id=${counter} class='coin'></div>`
        counter +=1;
      } else if(mapObj.array[y][x]===3){
        world.innerHTML += `<div id=${counter} class='ground'></div>`
        counter +=1;
      } else if(mapObj.array[y][x] === 5){
        world.innerHTML += `<div id=${counter} class='pacman'></div>`
        counter +=1;
      } else if(mapObj.array[y][x] === 8){
        world.innerHTML += "<br>"
      }
    }
  }
  return
}

// constructor(id, array, maxCoins, pacmanPosition, pacmanCoins, ghostPosition1, ghostPosition2)
function pacmanPlay(mapObj){
  const world = document.getElementById("pacman-world")
  let newPacman = new Pacman(mapObj.pacmanPosition, mapObj.pacmanCoins)
  let ghost1 = new Ghost(mapObj.ghostPosition1)
  let ghost2 = new Ghost(mapObj.ghostPosition2)
  ghostMovement(ghost1, newPacman)
  ghostMovement(ghost2, newPacman)
  document.addEventListener("keydown", (event)=>{
    var audio = new Audio('sounds/pacman_eatfruit.wav');
    const counter = document.getElementById("coincountermotherfucker")
    if(event.key === "ArrowUp"){
      audio.play();
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
      // return
    } else if (event.key === "ArrowDown"){
      audio.play();
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
      // return;
    } else if(event.key === "ArrowRight"){
      audio.play();
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
      // return;
    } else if(event.key === "ArrowLeft"){
      audio.play();
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
      // return;
    }
    if(newPacman.coins == mapObj.maxCoins){
      var audio = new Audio('sounds/pacman_extrapac.wav');
      audio.play();
      world.innerHTML = newPacman.win()
      let username = document.getElementById("username").innerText
        let player = User.all.find((user)=>{
          return user.name === username
        })
        User.updateWin(player, newPacman);
      return;
    }
  })
  return;
}

function ghostMovement(ghostObj, newPacman){
  document.addEventListener("keydown", (event)=>{
    const world = document.getElementById("pacman-world")
    let ghostObjLocation = document.getElementById(ghostObj.position)
    ghostObjLocation.dataset.id = "ghost"
    let movement = Math.floor(Math.random()*4)+1
    if (movement == 1){
      let oldGhostPosition = document.getElementById(ghostObj.position)
      let predictivePosition = document.getElementById(ghostObj.position+19)
      if(predictivePosition.className !== "wall"){
        ghostObj.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    }
    else if (movement == 2){
      let oldGhostPosition = document.getElementById(ghostObj.position)
      let predictivePosition = document.getElementById(ghostObj.position-19)
      if(predictivePosition.className !== "wall"){
        ghostObj.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    } else if (movement == 3){
      let oldGhostPosition = document.getElementById(ghostObj.position)
      let predictivePosition = document.getElementById(ghostObj.position+1)
      if(predictivePosition.className !== "wall"){
        ghostObj.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    } else if (movement == 4){
      let oldGhostPosition = document.getElementById(ghostObj.position)
      let predictivePosition = document.getElementById(ghostObj.position-1)
      if(predictivePosition.className !== "wall"){
        ghostObj.position = parseInt(predictivePosition.id)
        oldGhostPosition.removeAttribute("data-id")
        predictivePosition.dataset.id = "ghost"
      }
    }

    let ghostPosition = document.getElementById(ghostObj.position)
    if(parseInt(ghostPosition.id) == newPacman.position){
      world.innerHTML = newPacman.lose()
      var audio = new Audio('sounds/pacman_death.wav');
      audio.play();
      let username = document.getElementById("username").innerText
        let player = User.all.find((user)=>{
          return user.name === username
        })
        User.updateLoss(player, newPacman);
    }

  })
  return;
}
