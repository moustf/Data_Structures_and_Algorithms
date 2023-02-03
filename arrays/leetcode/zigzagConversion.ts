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


// ! The followed pattern in zig zag approach:
// ? First chars in each section jumps 8 chars to take the first char of the next section.
// ? The second char jumps 6 chars then 2 chars to hoop into the next section.
// ? The third char moves 4 chars.
// ? The forth element jumps 2 chars and 6 other chars to enter the next section.
// ? The fifth element jumps 8 chars each time.
// ? And so on ...
const convertTwo = (s: string, numRows: number): string => {
  if (numRows === 1) return s;
  let [ans, n, charsInSection] = ["", s.length, 2 * (numRows - 1)];

  for (let cr = 0; cr < numRows; cr++) {
    // cr = current row
    let ind = cr;
    while (ind < n) {
      ans += s[ind];

      // If current row is not first or last,
      // then we have to add one more character of current section.
      if (cr !== 0 && cr !== numRows - 1) {
        let charsInBetween = charsInSection - 2 * cr;
        let secondInd = ind + charsInBetween;

        if (secondInd < n) {
          ans += s[secondInd];
        }
      }

      ind += charsInSection;
    }
  }

  return ans;
};
