export function getCurrentYear(): string {
    const currentDate: Date = new Date();

    return currentDate.getFullYear().toString();
}