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

window.onload = robot_game.init
