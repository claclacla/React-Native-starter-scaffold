export function formatNumber(number: number | undefined): string {
    if (number === null || number === undefined) {
        return "0";
    }

    let formattedNumber: string = number.toLocaleString('it-IT', {
        minimumFractionDigits: 0, // No decimal places
        maximumFractionDigits: 0,
        //style: 'decimal', // Use decimal separators
    });

    formattedNumber = formattedNumber.replace(/\./g, "'");

    return formattedNumber;
}