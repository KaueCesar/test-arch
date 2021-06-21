/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useReducer, useEffect } from "react";
 import { StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import Routes from './src/Routes';
 import { StateContext, DispatchContext } from "./contexts";
 import { todoReducer } from "./reducers";
 import { TodoInterface, TodoContentInterface } from "./interfaces";
 
 const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, []);

    useEffect(() => {
      GoogleSignin.configure({
        offlineAccess: true,
        iosClientId:
        '',
        webClientId:
         '',
        androidClientId:
          '',
        // scopes: ['profile', 'email'],
      });
    }, []);
  
  
  
   return (
     <>
     <StateContext.Provider value={todos}>
       <DispatchContext.Provider value={dispatch}>
       <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Routes />
       </DispatchContext.Provider>
     </StateContext.Provider>
     </>
   );
 };
  
export default App;
