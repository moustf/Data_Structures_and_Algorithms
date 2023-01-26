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

function characterReplacementOne(s: string, k: number): number {
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

function characterReplacementTwo(s: string, k: number): number {
    let count: { [key: string]: number } = {};
    let res = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        count[s[r]] = 1 + (count[s[r]] || 0);
        console.log(count[s[r]] || 0);

        while (((r - l + 1) - Math.max(...Object.values(count))) > k) { // Is the current window valid? -length of the window-
            count[s[l]] -= 1;
            l += 1;
        }

        res = Math.max(res, r - l + 1);
    }

    return res;
};

function characterReplacementThree(s: string, k: number): number {
    let count: { [key: string]: number } = {};
    let res = 0;
    let l = 0;
    let maxFreq = 0;

    for (let r = 0; r < s.length; r++) {
        count[s[r]] = 1 + (count[s[r]] || 0);
        maxFreq = Math.max(maxFreq, count[s[r]]); // ? Maybe this one became the most frequent.

        while (((r - l + 1) - maxFreq) > k) { // Is the current window valid? -length of the window-
            count[s[l]] -= 1;
            l += 1;
        }

        res = Math.max(res, r - l + 1);
    }

    return res;
};
