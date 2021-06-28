
let game = new Game();
let gameview = new GameView();

let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) =>{
    tile.addEventListener("click" , function(){
        onTileclick(tile.dataset.index);
    })
})

function onTileclick(i){
    game.makeMove(i);
    gameview.updateBoard(game);
}

document.querySelector(".start").addEventListener("click" , function(){
    game = new Game();
    gameview.updateBoard(game);
})

gameview.updateBoard(game);