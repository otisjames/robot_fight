var robot_game = robot_game || {}

robot_game.Stats = function(initial){
    /* Stat object constructor
    ** The stat object is an object added to everything that has stats and
    ** everything that adds stats
    */
    this.health = initial.health || 1
    this.vampirism = initial.vamprism || 0
}
