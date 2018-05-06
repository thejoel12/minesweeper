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

console.log(generatePlayerBoard(2,3));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs => {
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
    
    let randomRowIndex = Math.Floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.Floor(Math.random() * numberOfColumns);



  }



  return board;
}
