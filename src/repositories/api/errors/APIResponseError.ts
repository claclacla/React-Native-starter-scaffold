class APIResponseError extends Error {
    constructor(message: string) {
        super(message); 
        this.name = 'APIResponseError';
    }
}

export { APIResponseError };