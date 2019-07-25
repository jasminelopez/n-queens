/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// 3 x 3 with 3 rooks places

// [
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]



window.findNRooksSolution = function(n) { 
  //given n, create nxn chessboard 
  var solution = []; 
  var board = new Board ({ n: n });
  //create a new Board
  console.log(board);
  var findRookSolutions = function (rowsLeft) {
    //base case
    //we want to stop the recursive call when rows === 0
    if (rowsLeft === 0) {
      solution.push();
      return [];
    }
    var rows = n - rowsLeft; //0
    //number of columns 
    for (var i = 0; i < n; i++) { 
      board.togglePiece(rows, i);
      //if there are no rook conflicts then continue recursion
      if (!board.hasAnyRooksConflicts()) {
        findRookSolutions(rowsLeft - 1);
        solution = board.rows();
        console.log(board.rows());
        
      }
      board.togglePiece(rows, i);
    }
  };
  findRookSolutions(n);
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board ({ n: n });
  //create a new Board

  var findRookSolutions = function (rowsLeft) {
    //base case
    //we want to stop the recursive call when rows === 0
    if (rowsLeft === 0) {
      solutionCount++;
      return;
    }
    var rows = n - rowsLeft; //0
    //number of columns 
    for (var i = 0; i < n; i++) { 
      board.togglePiece(rows, i);
      //if there are no rook conflicts then continue recursion
      if (!board.hasAnyRooksConflicts()) {
        findRookSolutions(rowsLeft - 1);
      }
      board.togglePiece(rows, i);
    }
  };
  findRookSolutions(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board ({ n: n });
  //create a new Board

  var findQueensSolutions = function (rowsLeft) {
    //base case
    //we want to stop the recursive call when rows === 0
    if (rowsLeft === 0) {
      solutionCount++;
      return;
    }
    var rows = n - rowsLeft; //0
    //number of columns 
    for (var i = 0; i < n; i++) { 
      board.togglePiece(rows, i);
      //if there are no rook conflicts then continue recursion
      if (!board.hasAnyQueensConflicts()) {
        findQueensSolutions(rowsLeft - 1);
      }
      board.togglePiece(rows, i);
    }
  };
  findQueensSolutions(n);


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
