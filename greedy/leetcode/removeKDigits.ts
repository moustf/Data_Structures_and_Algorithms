function removeKdigits(num: string, k: number): string {
  if (k === 0) return num;
  if (num.length === k) return '0';

  const stack: string[] = []; // ! LIFO

  for (let i = 0; i < num.length; i++) {
    // ? We still have digits to remove, stack is not empty, and the peak of the stack is
    // ? greater than the current digit of num string, why though?
    // ? Below, we will check if the k still has elements to remove, and since we want the
    // ? greater elements at the end of the stack to pop them, we can not allow pushing a
    // ? digit that is greater than the number in its previous position.
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
      k -= 1;
      stack.pop();
    }
    stack.push(num[i]);
  }

  // ? Poping the current removable digits number if k is still > 0.
  while (k > 0) {
    k -= 1;
    stack.pop();
  }

  // ? Removing the leading zeros, it will stop once the loop finds any digit greater than zero.
  let j = 0;
  while (stack[j] === '0') {
    stack[j] = '';
    j += 1;
  }

  return stack.join('') || '0';
};