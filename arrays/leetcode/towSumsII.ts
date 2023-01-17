function twoSumOne(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) continue;

            if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
        }
    }
};
