//contains all code related to displaying game data
var robot_game = robot_game || {}

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
