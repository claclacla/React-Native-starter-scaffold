import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalState } from '../../repositories/localStorage/entities/GlobalState';

import { ApplicationScreensList } from '../../screensList/ApplicationScreensList';

import AuthenticationScreen from '../../screens/AuthenticationScreen';
import MainTabScreen from '../../screens/MainTabScreen';

const Stack = createNativeStackNavigator<ApplicationScreensList>();

// For the icons list:
// https://ionic.io/ionicons

function MainNavigationComponent() {
    const isLogged: boolean = useSelector((state: GlobalState) => state.authentication.isLogged);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                {!isLogged ? (
                    <Stack.Screen name="Authentication" component={AuthenticationScreen} />
                ) : (
                    <Stack.Screen name="Main" component={MainTabScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigationComponent;
