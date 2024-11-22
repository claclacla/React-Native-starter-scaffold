export function hashToArray(hash: object) {
    return Object.entries(hash).map(hashData => hashData[1]);
}