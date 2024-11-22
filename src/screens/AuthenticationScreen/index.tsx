import React from 'react';

import {
    View,
    Colors,
} from 'react-native-ui-lib';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationScreensList } from '../../screensList/ApplicationScreensList';

import AuthenticationForm from './components/AuthenticationForm';

type AuthenticationScreenProps = NativeStackScreenProps<ApplicationScreensList, "Authentication">;

const AuthenticationScreen: React.FC<AuthenticationScreenProps> = (props) => {
    return (
        <View flex center style={{ backgroundColor: Colors.grey5 }}>
            <AuthenticationForm />
        </View >

    )
}

export default AuthenticationScreen;