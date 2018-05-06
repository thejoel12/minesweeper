// const printBoard = board => {
//   console.log('Current Board: ');
//   console.log(board[0].join(' | '));
//   console.log(board[1].join(' | '));
//   console.log(board[2].join(' | '));
// };
// let board = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ];
//
// printBoard(board);
//
// board[0][1]= '1';
// board[2][2] = 'B';
// printBoard(board);



const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
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



const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
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

    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //will fix the fact that code in while loop can place bombs on already existing bombs. Will fix shortly.

  }

  return board;
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let bombBoard = generateBombBoard(3,4,5);
let playerBoard = generatePlayerBoard(3, 3);

console.log('Player Board ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
