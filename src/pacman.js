class Pacman{
  constructor(position = 86, coins = 0){
    this.position = position,
    this.coins = coins
  }

  win(){
    return `
    <h3>YOU WIN!</h3>
    <br>
    <p id="levelup">  Next Level</p>
    `
  }

  lose(){
    return `
    <h3>YOU LOSE!</h3>
    <br>
    <p>Highscore: ${this.coins}</p>
    <br>
    <p id="playagain">Play Again</p>
    `
  }
  resetPosition(){
    this.position = 86
    this.coins = 0
  }




}
