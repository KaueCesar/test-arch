import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import { store } from './redux/store';
import Splash from './modules/Splash';
import AppNavigation from './AppNavigation';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  const [appStarted, setAppStarted] = useState(false);

  return (
  <>
  {/* <ApolloProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator headerMode="none" initialRouteName="Splash">
            {!appStarted && (
              <Screen name="Splash">
                {props => <Splash setAppStarted={setAppStarted} {...props} />}
              </Screen>
            )}
            <Screen
              options={{ gestureEnabled: false }}
              name="AppNavigation"
              component={AppNavigation}
            />
           
          </Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider> */}
    </>
  );
};

export default Routes;
