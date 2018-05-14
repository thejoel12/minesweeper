class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log("Game Over!");
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log("You won!");
    } else {
      console.log("Current Board: ");
      this._board.print();
    }
  }
}




class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log("This tile has already been flipped!");
      return;
    } if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1,-1],
      [-1,0],
      [-1,1],
      [0,-1],
      [0,1],
      [1,-1],
      [1,0],
      [1,1]
    ];

    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offSet => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
      });
      return numberOfBombs;
  };

  hasSafeTiles(numberOfTiles, numberOfBombs) {
      return this._numberOfBombs !== this._numberOfTiles;
  }

  print() {

    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }


  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];
    //row loop
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      //column loop
      for (let j = 0; j < numberOfColumns; j++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = [];
    //row loop
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      //column loop
      for (let j = 0; j < numberOfColumns; j++) {
        row.push(null);
      }
      board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {

      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
      }
      //will fix the fact that code in while loop can place bombs on already existing bombs. Will fix shortly.

    }

    return board;
  }


}

const g = new Game(3, 3, 3);
g.playMove(1,3);



//
//
//
//
//
//
//
//
// const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
//   let board = [];
//   //row loop
//   for (let i = 0; i < numberOfRows; i++) {
//     let row = [];
//     //column loop
//     for (let j = 0; j < numberOfColumns; j++) {
//       row.push(' ');
//     }
//     board.push(row);
//   }
//   return board;
// }
//
//
//
// const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
//   let board = [];
//   //row loop
//   for (let i = 0; i < numberOfRows; i++) {
//     let row = [];
//     //column loop
//     for (let j = 0; j < numberOfColumns; j++) {
//       row.push(null);
//     }
//     board.push(row);
//   }
//   let numberOfBombsPlaced = 0;
//   while (numberOfBombsPlaced < numberOfBombs) {
//
//     let randomRowIndex = Math.floor(Math.random() * numberOfRows);
//     let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
//     if (board[randomRowIndex][randomColumnIndex] !== 'B') {
//     board[randomRowIndex][randomColumnIndex] = 'B';
//     numberOfBombsPlaced++;
//     }
//     //will fix the fact that code in while loop can place bombs on already existing bombs. Will fix shortly.
//
//   }
//
//   return board;
// }
//
//
// const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
//   const neighborOffsets = [
//     [-1,-1],
//     [-1,0],
//     [-1,1],
//     [0,-1],
//     [0,1],
//     [1,-1],
//     [1,0],
//     [1,1]
//   ];
//
//   const numberOfRows = bombBoard.length;
//   const numberOfColumns = bombBoard[0].length;
//   let numberOfBombs = 0;
//
//   neighborOffsets.forEach(offSet => {
//     const neighborRowIndex = rowIndex + offset[0];
//     const neighborColumnIndex = columnIndex + offset[1];
//     if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
//       if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
//         numberOfBombs++;
//       }
//     }
//     });
//     return numberOfBombs;
//
// };
//
// const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
//   if (playerBoard[rowIndex][columnIndex] !== ' ') {
//     console.log("This tile has already been flipped!");
//     return;
//   } else if (bombBoard[rowIndex][columnIndex] == 'B') {
//     playerBoard[rowIndex][columnIndex] = 'B';
//   } else {
//     playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
//   }
// }
//
//
//
// const printBoard = board => {
//   console.log(board.map(row => row.join(' | ')).join('\n'));
// }
//
// let bombBoard = generateBombBoard(3,4,5);
// let playerBoard = generatePlayerBoard(3, 3);
//
// console.log('Player Board ');
// printBoard(playerBoard);
// console.log('Bomb Board: ');
// printBoard(bombBoard);
//
// flipTile(playerBoard, bombBoard, 1, 0)
// console.log("Updated player Board: ");
// printBoard(playerBoard);
