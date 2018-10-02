document.addEventListener('DOMContentLoaded', (event) => {




  // set up game board & corresponding elements
  const map =[
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
  [1,1,1,1,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,8],
  [1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,8],
  [1,1,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,1,1,8],
  [1,1,1,1,2,2,2,1,1,5,1,1,2,2,2,1,1,1,1,8],
  [1,1,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,1,1,8],
  [1,1,1,1,2,1,1,2,2,1,2,2,1,1,2,1,1,1,1,8],
  [1,1,1,1,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,8],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8]
]

  //render pacman world
  const world = document.getElementById("pacman-world")

  function renderWorld(){
    world.innerHTML = ''; //empty from previous
    var counter = 1;
    for (let y=0; y< map.length; y++){
      for (let x=0; x< map[y].length; x++){
        if(map[y][x] === 1){
          world.innerHTML += `<div id=${counter} class='wall'></div>`
          counter +=1;
        } else if(map[y][x] === 2){
          world.innerHTML += `<div id=${counter} class='coin'></div>`
          counter +=1;
        } else if(map[y][x]===3){
          world.innerHTML += `<div id=${counter} class='ground'></div>`
          counter +=1;
        } else if(map[y][x] === 5){
          world.innerHTML += `<div id=${counter} class='pacman'></div>`
          counter +=1;
        } else if(map[y][x] === 8){
          world.innerHTML += "<br>"
        }
      }
    }
  }
  renderWorld();

  let newPacman = new Pacman(86,0)

  document.addEventListener("keydown", (event)=>{
    if(newPacman.coins == 5400){
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
        console.log(oldPosition)
        console.log(predictivePosition)
        console.log(newPacman)
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
    }

  })

//level up on click once level is complete
document.addEventListener("click", (event)=>{
  if (event.target.id === "levelup"){
    debugger;
  }
})


});
