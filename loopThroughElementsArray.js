var vector = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (counter = 0; counter < vector.length; counter++) {
  let matrixRow = vector[counter];
  console.log("columns in row:", counter);

  for (counter2 = 0; counter2 < matrixRow.length; counter2++) {
    var matrixColumn = matrixRow[counter2];
    console.log(matrixColumn);
  }
}
console.log(vector);
