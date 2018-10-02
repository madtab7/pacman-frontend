class Pacman{
  constructor(position = 86, coins = 0){
    this.position = position,
    this.coins = coins
  }

  win(){
    return `
    <h3>YOU WIN!</h3>
    <p id="levelup">  Next Level</p>

    `
  }

  lose(){
    return `
    <h3>YOU LOSE!</h3>
    <p>Highscore: ${this.coins}
    `
  }




}
