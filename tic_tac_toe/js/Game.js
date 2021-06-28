class Game{
    constructor(){
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill("");
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
        if(this.endOfgame()){
            return;
        }

        if(this.board[idx]){
            return;
        }
        this.board[idx] = this.turn;
        let win = this.findWinerCombination();
        if(!win){
            this.nextTurn();
        }
    }

    findWinerCombination(){
        const WinningCombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0.3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        
        for(const combinations of WinningCombination){
            const [a,b,c] = combinations;

            if(this.board[a] && (this.board[a] == this.board[b] && this.board[a] == this.board[c])){
                return combinations;
            }
        }
        return null;
    }

    endOfgame(){
        let winner = this.findWinerCombination();
        if(winner){
            return true;
        }
        else{
            return false;
        }
    }
}

class GameView{
    constructor(){
        console.log("inti gameview");
    }

    updateBoard(game){
        this.updateTurn(game);
        let winner = game.findWinerCombination();
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index = "${i}"]`);
            tile.classList.remove("winner");
            let tiletype = game.board[i] == "X" ? "tile-X" : "tile-O";
            tile.innerHTML = `<span class = "${tiletype}">${game.board[i]}</span>`;

            if(winner && winner.includes(i)){
                tile.classList.add("winner");
            }
        }
    }

    updateTurn(game){
        let playerx = document.querySelector(".player-X");
        let playero = document.querySelector(".player-O");

        if(game.turn == "X"){
            playero.classList.remove("active");
            playerx.classList.add("active");
        }
        else if(game.turn == "O"){
            playerx.classList.remove("active");
            playero.classList.add("active");
        }
    }
}