import { APIAuthenticationRequestParameters } from '../entities/APIAuthenticationRequestParameters';
import { APIAuthenticationRequestResponse } from '../entities/APIAuthenticationRequestResponse';

export async function authentication(apiAuthenticationRequestParameters: APIAuthenticationRequestParameters) {
    let authenticationKey: string = "";

    // API call... START

    authenticationKey = "IY6UEFLN-WR4RIJ4O";

    // API call... END

    const apiAuthenticationRequestResponse: APIAuthenticationRequestResponse = {
        authenticationKey
    };

    return apiAuthenticationRequestResponse;
}