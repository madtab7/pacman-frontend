class User {
  constructor(userJsonObj){
    this.id = userJsonObj.id,
    this.name = userJsonObj.name,
    this.high_score = userJsonObj.high_score,
    User.all.push(this)
  }

  static renderForm(){
    return `
    <form id="player">
      PLAYER NAME: <input type="text" id="username"></input>
      <button type="submit" id="user-submit" value="Submit">submit</button>
    </form>
    `
  }

  static findUser(id){
    return User.all.find((user)=> user.id == id)
  }

}

User.all = [];
