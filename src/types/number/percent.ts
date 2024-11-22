export function percent(value: number | undefined, maxValue: number | undefined): number {
    if (value === undefined || maxValue === undefined) {
        return 0;
    }

    if (maxValue === 0) {
        return 0;
    }

    return Math.round((value / maxValue) * 100);
}