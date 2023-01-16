const filterSymbols = (s: string): string => (
    s.toLowerCase().replace(/[^a-z0-9]/gi, '')
);

const isPalindromeOne = (s: string): boolean  => (
    filterSymbols(s) === filterSymbols(s).split('').reverse().join('') 
);