  //render pacman world
const world = document.getElementById("pacman-world")
let newPacman = new Pacman(86,0)


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
}


function pacmanPlay(mapObj){
  const world = document.getElementById("pacman-world")
  document.addEventListener("keydown", (event)=>{
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
    if(newPacman.coins == mapObj.maxCoins){
      world.innerHTML = newPacman.win()
      let username = document.getElementById("username").innerText
        let player = User.all.find((user)=>{
          return user.name === username
        })
        User.updateWin(player);
      return;
    }
  })
}

function ghostMovement(ghostObj){
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
    if(ghostPosition.id == newPacman.position){
      world.innerHTML = newPacman.lose()
      let username = document.getElementById("username").innerText
        let player = User.all.find((user)=>{
          return user.name === username
        })
        User.updateLoss(player);
      return;
    }

  })
  return;
}

  // let ghost1 = new Ghost(64)
  //event listener to start ghost movements
  // document.addEventListener("keydown", (event)=>{
  //   const world = document.getElementById("pacman-world")
  //   let ghost1Location = document.getElementById(ghost1.position)
  //   ghost1Location.dataset.id = "ghost"
  //   let movement = Math.floor(Math.random()*4)+1
  //   if (movement == 1){
  //     let oldGhostPosition = document.getElementById(ghost1.position)
  //     let predictivePosition = document.getElementById(ghost1.position+19)
  //     if(predictivePosition.className !== "wall"){
  //       ghost1.position = parseInt(predictivePosition.id)
  //       oldGhostPosition.removeAttribute("data-id")
  //       predictivePosition.dataset.id = "ghost"
  //     }
  //   }
  //   else if (movement == 2){
  //     let oldGhostPosition = document.getElementById(ghost1.position)
  //     let predictivePosition = document.getElementById(ghost1.position-19)
  //     if(predictivePosition.className !== "wall"){
  //       ghost1.position = parseInt(predictivePosition.id)
  //       oldGhostPosition.removeAttribute("data-id")
  //       predictivePosition.dataset.id = "ghost"
  //     }
  //   } else if (movement == 3){
  //     let oldGhostPosition = document.getElementById(ghost1.position)
  //     let predictivePosition = document.getElementById(ghost1.position+1)
  //     if(predictivePosition.className !== "wall"){
  //       ghost1.position = parseInt(predictivePosition.id)
  //       oldGhostPosition.removeAttribute("data-id")
  //       predictivePosition.dataset.id = "ghost"
  //     }
  //   } else if (movement == 4){
  //     let oldGhostPosition = document.getElementById(ghost1.position)
  //     let predictivePosition = document.getElementById(ghost1.position-1)
  //     if(predictivePosition.className !== "wall"){
  //       ghost1.position = parseInt(predictivePosition.id)
  //       oldGhostPosition.removeAttribute("data-id")
  //       predictivePosition.dataset.id = "ghost"
  //     }
  //   }
  //
  //   let ghostPosition = document.getElementById(ghost1.position)
  //   if(ghostPosition.id == newPacman.position){
  //     world.innerHTML = newPacman.lose()
  //
  //   }
  //
  // })
