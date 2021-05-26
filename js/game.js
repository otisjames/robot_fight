var robot_game = robot_game || {}

robot_game = {
    player: null,
    map: [],
    current_encounter: null,
}

robot_game.init = function(){
    //init map
    for (var y = 0; y < params.MAP_HEIGHT; y++) {
        robot_game.map.push([])
        for (var x = 0; x < params.MAP_WIDTH; x++) {
            robot_game.map.push(robot_game.create_random_map_tile())
        }
    }
    //create map table element
    robot_game.view.create_map_table()

    robot_game.player = new robot_game.Player()
}

robot_game.create_random_map_tile = function(){
    return {
        can_go_right: Math.floor(Math.random()*2),
        can_go_left: Math.floor(Math.random()*2),
        can_go_up: Math.floor(Math.random()*2),
        can_go_down: Math.floor(Math.random()*2)
    }
}

robot_game.view = {
    create_map_table: function(){
        var map_table = document.getElementById('map_table')
        for (var y = 0; y < params.MAP_HEIGHT; y++) {
            var tr = document.createElement("TR")
            for (var x = 0; x < params.MAP_WIDTH; x++) {
                 var td = document.createElement("TD")
                 td.className = "map_grid_cell"
                 tr.appendChild(td)
            }
            map_table.appendChild(tr)
        }
    },
    display_health: function(){}
}

robot_game.Player = function(initial_stats){
    //player constructor. initiates all player stats and inventory
    this.stats = new robot_game.Stats(initial_stats)
    this.weapon = null
}

robot_game.Player.prototype.attack = function(){}
robot_game.Player.prototype.move = function(){}

robot_game.Stats = function(initial){
    /* Stat object constructor
    ** The stat object is an object added to everything that has stats and
    ** everything that adds stats
    */
    this.health = initial === undefined ? 1 : initial.health
}
window.onload = robot_game.init
