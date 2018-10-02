document.addEventListener('DOMContentLoaded', (event) => {



  //get high score users

  // pacman position
  // const pacman = {
  // x: 6,
  // y: 4
  // }

  // set up game board & corresponding elements
  const map = [
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


});
