var robot_game = robot_game || {}

robot_game.create_random_map_tile = function(){
    return {
        can_go_right: Math.floor(Math.random()*2),
        can_go_left: Math.floor(Math.random()*2),
        can_go_up: Math.floor(Math.random()*2),
        can_go_down: Math.floor(Math.random()*2)
    }
}
