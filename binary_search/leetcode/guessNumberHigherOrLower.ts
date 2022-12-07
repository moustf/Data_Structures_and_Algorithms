/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// ! guess function is predefined with something like this:
const guess = (num: number): number => {
  let picked = 5; // ? Just an example.

  return num > picked ? -1 : num < picked ? 1 : 0;
}

function guessNumber(n: number): number {
  let low = 1;
  let high = n;

  while (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === -1) {
      high = mid - 1;
    } else if (guess(mid) === 1) {
      low = mid + 1;
    }
  }

  return low; // ? This just for the returned type to not prompt an error, but it works without it.
};
