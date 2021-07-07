class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var PlayerCountRef = database.ref('PlayerCount');
    PlayerCountRef.on("value",(data)=>{
      PlayerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      PlayerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
