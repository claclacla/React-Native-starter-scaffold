import React, { useState } from 'react';

import {
    View,
    Button,
    Colors,
    TextField,
    Text,
} from 'react-native-ui-lib';

import { useDispatch } from 'react-redux';

import { APIAuthenticationRequestParameters } from '../../../../repositories/api/entities/APIAuthenticationRequestParameters';

import { authentication } from '../../../../repositories/api/axios/authentication';

import { AuthentificationError } from '../../../../repositories/api/errors/AuthentificationError';
import { APIResponseError } from '../../../../repositories/api/errors/APIResponseError';

import { setLocalStorageKey } from '../../../../repositories/localStorage/redux/authentication';

import { styles } from '../../../../styles';

function AuthenticationForm() {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [authenticationError, setAuthenticationError] = useState(false);
    const [authenticationErrorString, setAuthenticationErrorString] = useState('');

    async function authenticate() {
        const apiAuthenticationRequestParameters: APIAuthenticationRequestParameters = {
            username,
            password
        };

        try {
            const apiAuthenticationRequestResponse = await authentication(apiAuthenticationRequestParameters);

            dispatch(setLocalStorageKey(apiAuthenticationRequestResponse.authenticationKey));
        }
        catch (error) {
            if (error instanceof AuthentificationError || error instanceof APIResponseError) {
                setAuthenticationError(true);
                setAuthenticationErrorString(error.message);
            }
        }
    }

    function setAuthenticationErrorStyle() {
        return {
            ...styles.authenticationTextInput,
            ...(authenticationError ? { borderColor: 'red' } : { borderColor: "#ccc" }),
        }
    }

    return (
        <View style={styles.width90Percent}>
            <TextField value={username} onChangeText={text => { setUsername(text); setAuthenticationError(false); }} style={setAuthenticationErrorStyle()} />
            <TextField value={password} secureTextEntry={true} onChangeText={text => { setPassword(text); setAuthenticationError(false); }} style={setAuthenticationErrorStyle()} />
            {authenticationError && <View center>
                <Text red30 text70>
                    {authenticationErrorString}
                </Text>
            </View>}
            <Button label="Login" marginT-20 backgroundColor={Colors.grey30} size={'large'}
                onPress={() => authenticate() } />
            <View center>
                <Text grey30 text70 marginT-20>
                    Did you really forget your password bro?
                </Text>
            </View>
        </View>
    )

}

export default AuthenticationForm;