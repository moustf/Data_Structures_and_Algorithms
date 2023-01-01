function lemonadeChange(bills: number[]): boolean {
  let fives = 0;
  let tens = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fives++;
    } else if (bills[i] === 10) {
      if (fives < 1) {
        return false;
      } else {
        fives--;
        tens++;
      }
    } else if (bills[i] === 20) {
      if (fives >= 3 && tens < 1) {
        fives -= 3;
      } else if (fives >= 1 && tens >= 1) {
        fives--;
        tens--;
      } else {
        return false;
      }
    }
  }

  return true;
};