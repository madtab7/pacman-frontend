document.addEventListener('DOMContentLoaded', (event) => {



  //get high score users

  //pacman position
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


  //listen for keydown, arrow UP
  document.addEventListener("keydown", (event)=>{
    let newPacman = new Pacman(86,0)
    const keyName = event.key
    console.log(keyName)
    if(event.key === "ArrowUp"){
      let oldPosition = document.getElementById(newPacman.position)
      newPacman.position = (newPacman.position - 19)
      let newPosition = document.getElementById(newPacman.position)
      oldPosition.removeAttribute("class")
      newPosition.removeAttribute("class")
      oldPosition.className = 'ground'
      newPosition.className = 'pacman'
      //register what the position class is

    }
  })


});
