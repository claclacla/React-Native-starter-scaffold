export function getPreviousYear(): string {
    const currentDate: Date = new Date();
    const previousYear = currentDate.getFullYear() - 1;

    return previousYear.toString();
}