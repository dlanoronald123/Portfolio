var matrix = [];
myArray();
function myArray() {
  for (var i = 0; i < 3; i++) {
    matrix[i] = new Array(3).fill(1)
  }
  enterValues();
}

function enterValues() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      document.getElementById(`inp` + (row+ 1) + (col+ 1)).value = matrix[row][col];
    }
  }
}

function enterNum() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++)
      matrix[row][col] = document.getElementById(`inp` + (row+ 1) + (col+ 1)).value;
  }
}

function magicSquare() {
  enterNum();
  var magSqu = false;
  var sum = 0;
  for (var col = 0; col < 3; col++) {
    sum = sum + matrix[0][col];
  }
  var rowSum = 0;
  for (var i = 1; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      rowSum = rowSum + matrix[i][j];
      if (rowSum != sum) {
        magSqu = false;
        break;
      }
    }
  }
  var sum_diagonal = 0;
  if (magSqu) {
    for (var i = 0; i < 3; i++)
      for (var j = 0; j < 3; j++)
        if (i == j)
          sum_diagonal += matrix[i][j];
    if (sum_diagonal != sum) {
      magSqu = false;
    }
  }
  if (magSqu) {
    sum_diagonal = 0;
    for (var i = 0; i < 3; i++)
      for (var j = 0; j < 3; j++)
        if ((i + j) == 2)
          sum_diagonal += matrix[i][j];
    if (sum_diagonal != sum) {
      magSqu = false;
    }
  }
  if (magSqu == true) {
    document.getElementById("result").innerHTML = "This is a magic square.";
  } else {
    document.getElementById("result").innerHTML = "This is not a magic square.";
  }
}