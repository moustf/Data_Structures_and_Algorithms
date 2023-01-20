function reverse(x: number): number {
    if (x < 0) return -1 * reverse(-x);

    const res = Number(x.toString().split('').reverse().join(''));

    return (res > (2 ** 31) - 1) ?  0 : res;
};