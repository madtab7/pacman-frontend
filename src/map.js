class Map {
  constructor(id, array, maxCoins){
    this.id = id;
    this.array = array;
    this.maxCoins = maxCoins;
    Map.all.push(this)
  }  
}
Map.all = [];
