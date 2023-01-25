const getCode = (char: string) => char.charCodeAt(0) - 'A'.charCodeAt(0);

const addRightFrequency = (s: string, right: number, map: number[]) => {
    const char = s[right];
    const index = getCode(char);

    map[index]++;

    return map[index];
};

const subtractLeftFrequency = (s: string, left: number, map: number[]) => {
    const char = s[left];
    const index = getCode(char);

    map[index]--;

    return map[index];
};

function characterReplacement(s: string, k: number): number {
let [left, right, longest, max] = new Array(4).fill(0);
    const frequencyMap = new Array(26).fill(0);

    while (right < s.length) {
        const count = addRightFrequency(s, right, frequencyMap);

        longest = Math.max(longest, count);

        let window = right - left + 1;
        const canSlide = k < window - longest;
        if (canSlide) {
            subtractLeftFrequency(s, left, frequencyMap);
            left++;
        }

        window = right - left + 1;
        max = Math.max(max, window);

        right++;
    }

    return max;
};
