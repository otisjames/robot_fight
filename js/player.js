var robot_game = robot_game || {}

robot_game.Player = function(initial_stats){
    //player constructor. initiates all player stats and inventory
    this.stats = new robot_game.Stats(initial_stats)
    this.weapon = null
}

robot_game.Player.prototype.attack = function(){}
robot_game.Player.prototype.move = function(){}
