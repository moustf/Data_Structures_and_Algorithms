const intToRoman = (num: number): string => {
  // ? We are replacing the map in a desceding order because the roman system is a subtractive system
  // ? which means that the the largest value is subtracted from the smallest value to represent numbers.
  const map = new Map<string, number>([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);
  let roman = "";

  for (const [rom, val] of map.entries()) {
    while (num >= val) {
      roman += rom;
      num -= val;
    }
  }

  return roman;
};
