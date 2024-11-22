export function replaceNegativeNumbersWithZero(num: number) {
    if(num === undefined || num < 0) {
        return 0;
    }

    return num;
}