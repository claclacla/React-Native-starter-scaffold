import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from "./src/repositories/localStorage/redux/authentication";

import MainNavigationComponent from "./src/components/MainNavigationComponent";

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
    }
})

function App() {
    useEffect(() => {
        //SplashScreen.hide();
    }, []);

    return (
        <Provider store={store}>
            <MainNavigationComponent />
        </Provider>
    );
}

export default App;
