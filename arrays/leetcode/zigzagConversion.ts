const convertOne = (s: string, numRows: number): string => {
  if (numRows === 1) return s;
  let [currRow, currCol, currStringIndex, n] = [0, 0, 0, s.length];
  let sectionsNum = Math.ceil(n / (2 * numRows - 2));
  // ? We used ceil to get the nearest whole number that holds all the characters left.
  let colsNum = sectionsNum * (numRows - 1);
  let matrix = new Array(numRows)
    .fill(0)
    .map(() => new Array(colsNum).fill(" "));

  // ? Filling the matrix with s chars in zig zag pattern.
  while (currStringIndex < n) {
    // ? Moving down in the matrix's y dimension
    while (currRow < numRows && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currRow += 1;
      currStringIndex += 1;
    }

    // ? Reducing the currRow by 2 becuase arrays are zero indexed.
    currRow -= 2;
    currCol += 1;

    // ? Moving up with moving right also. Filling the diagonals.
    while (currRow > 0 && currCol < colsNum && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currRow -= 1;
      currCol += 1;
      currStringIndex += 1;
    }
  }

  return matrix
    .map((row) => row.join(""))
    .join("")
    .replace(/\s/g, "");
};
