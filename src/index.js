document.addEventListener('DOMContentLoaded', (event) => {

  //get high score users

  //pacman position
  const pacman = {
  x: 6,
  y: 4
  }

  // set up game board & corresponding elements
  const map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,1,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,2,1,1,1,2,1],
  [1,2,1,2,2,2,2,2,2,2,1,2,1],
  [1,2,2,2,1,1,5,1,1,2,2,2,1],
  [1,2,1,2,2,2,2,2,2,2,1,2,1],
  [1,2,1,1,2,2,1,2,2,1,1,2,1],
  [1,2,2,2,2,2,1,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1]
]

  //render pacman world
  const world = document.getElementById("pacman-world")

  function renderWorld(){
    world.innerHTML = ''; //empty from previous
    for (let y=0; y< map.length; y++){
      for (let x=0; x< map[y].length; x++){
        if(map[y][x] === 1){
          world.innerHTML += "<div class='wall'></div>"
        } else if(map[y][x] === 2){
          world.innerHTML += "<div class='coin'></div>"
        } else if(map[y][x] === 5){
          world.innerHTML += "<div class='pacman'></div>"
        }
      }
    }
  }
  renderWorld();

});
