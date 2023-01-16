const filterSymbols = (s: string): string => (
    s.toLowerCase().replace(/[^a-z0-9]/gi, '')
);

const isPalindromeOne = (s: string): boolean  => (
    filterSymbols(s) === filterSymbols(s).split('').reverse().join('') 
);

const isPalindromeTwo = (s: string): boolean => {
    if (s.length <= 1) return true;

    const regex = /[a-zA-Z0-9]/;
    let [left, right] = [0, s.length - 1];
    let leftChar: string;
    let rightChar: string;

    while (left < right) {
        leftChar = s.charAt(left);
        rightChar = s.charAt(right);

        if (!regex.test(leftChar)) {
            left += 1;
        } else if (!regex.test(rightChar)) {
            right -= 1;
        } else {
            if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            }

            left += 1;
            right -= 1;
        }
    }

    return true;
};
