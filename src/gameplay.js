document.addEventListener("DOMContentLoaded", (event)=>{
  const world = document.getElementById("pacman-world")

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




//level up on click once level is complete
document.addEventListener("click", (event)=>{
  if (event.target.id === "levelup"){
    renderWorld(1);
  }
})

//replay same level on click after losing
document.addEventListener("click", (event)=>{
  if (event.target.id === "playagain"){
    // renderWorld()
  }
})


});
