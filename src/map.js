class Map {
  constructor(id, array, maxCoins, pacmanPosition, pacmanCoins, ghostPosition1, ghostPosition2){
    this.id = id;
    this.array = array;
    this.maxCoins = maxCoins;
    this.pacmanPosition = pacmanPosition;
    this.pacmanCoins = pacmanCoins;
    this.ghostPosition1 = ghostPosition1;
    this.ghostPosition2 = ghostPosition2;
    Map.all.push(this)
  }

  static clear(){
    this.id = 0;
    this.array = 0;
    this.maxCoins = 0;
    this.pacmanPosition = 0;
    this.pacmanCoins = 0;
    this.ghostPosition1 = 0;
    this.ghostPosition2 = 0;
  }

}
Map.all = [];
