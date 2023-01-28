const isValidOne = (s: string): boolean => {
  const stack: string[] = [];
  const hashMap = {
      ']': '[',
      ')': '(',
      '}': '{',
  };

  for (let char of [...s]) {
      if (char in hashMap) {
          if (stack.length && stack[stack.length - 1] === hashMap[char]) {
          // ? Stack is not empty.
          // ? Our character is in the stack.
          // ? The top of our stack is our closing character.
          stack.pop();
          } else {
              // ? This ensures that the characters are in the right order. If the char at the end of the stack isn't the closing char,
              // ? it means that the order is not right.
              return false;
          }
      } else {
          stack.push(char);
      }
  }

  return stack.length === 0 ? true : false;
};

const isValid = (s: string): boolean =>  {
  const stack: string[] = [];
  
  if (s.length % 2 !== 0) return false;
  
  const map = {
      '(': ')',
      '[': ']',
      '{': '}', 
  };
  
  for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
        stack.push(s[i]);
      } else if (s[i] === map[stack[stack.length - 1]]){
        stack.pop();
      } else {
        return false;
      }
  }
  
  return stack.length === 0;
};
