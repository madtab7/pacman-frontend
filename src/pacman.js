class Pacman{
  constructor(position = 86, coins = 0){
    this.position = position,
    this.coins = coins
  }

  static resetPosition(){
    this.position = 86
    this.coins = 0
  }

  win(){
    return `
    <h3>YOU WIN!</h3>
    <br>
    <p id="levelup">  Next Level</p>
    <br>
    `
  }

  lose(){
    return `
    <h3>YOU LOSE!</h3>
    <br>
    <p>Highscore: ${this.coins}</p>
    <br>
    <p id="playagain">Play Again</p>
    <br>
    `
  }




}
