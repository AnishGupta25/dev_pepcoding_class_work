class Game{
    constructor(){
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O";
        }
        else{
            this.turn = "X";
        }
    }

    makeMove(idx){
        this.board[idx] = this.turn;
    }
}

class GameView{
    constructor(){
        console.log("inti gameview");
    }

    updateBoard(game){
        console.log(game.board);
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index = "${i}"]`);
            tile.textContent = game.board[i];
        }
    }
}