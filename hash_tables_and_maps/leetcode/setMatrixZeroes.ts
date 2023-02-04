/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
  let [rowsSet, colsSet] = [new Set<number>(), new Set<number>()];

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) {
              rowsSet.add(i);
              colsSet.add(j);
          }
      }
  }

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (rowsSet.has(i) || colsSet.has(j)) {
              matrix[i][j] = 0;
          }
      }
  }
};