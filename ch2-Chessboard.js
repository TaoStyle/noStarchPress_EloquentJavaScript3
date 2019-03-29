let chessCase = ' ';
let size = 10;
for(let i = 0; i < size; i++) {
  chessRow = '';
  for(let i = 0; i < size; i++) {
    chessRow += chessCase;
    if(i < size - 1) {
      if(chessCase == ' ') {
        chessCase = '#';
      } else {
        chessCase = ' ';
      }
    };
  };
  console.log(chessRow);
};