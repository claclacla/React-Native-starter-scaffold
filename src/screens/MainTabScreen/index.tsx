import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainScreensList } from '../../screensList/MainScreensList';

import {
    Colors,
} from 'react-native-ui-lib';

import Icon from 'react-native-ionicons';

import MainPageNavigationComponent from './components/MainPageNavigationComponent';

const Tab = createBottomTabNavigator<MainScreensList>();

function MainTabScreen() {
    useEffect(() => {
        //SplashScreen.hide();
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = "";

                    if (route.name === 'MainPage') {
                        iconName = focused ? 'list' : 'list';
                    }

                    color = focused ? Colors.mainRed : Colors.grey10;

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Colors.grey20,
                tabBarInactiveTintColor: Colors.grey20,
                tabBarStyle: {
                    backgroundColor: Colors.grey80,
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 10,
                },
            })}
        >
            <Tab.Screen name="MainPage" component={MainPageNavigationComponent} options={{ tabBarLabel: 'Main page', headerTitle: 'MainPage', }}/>
        </Tab.Navigator >
    );
}

export default MainTabScreen;