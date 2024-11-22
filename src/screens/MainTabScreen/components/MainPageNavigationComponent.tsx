import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainPageScreensList } from '../../../screensList/MainPageScreensList';

import MainPageMainScreen from '../../MainPage/MainScreen';

const Stack = createNativeStackNavigator<MainPageScreensList>();

// For the icons list:
// https://ionic.io/ionicons

function MainPageNavigationComponent() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="MainPageMain" component={MainPageMainScreen} />
        </Stack.Navigator>
    );
}

export default MainPageNavigationComponent;