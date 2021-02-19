import React, {useState, useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import useCachedResources from './hooks/useCacheResources';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const isLoadingComplete = useCachedResources();

  const [isloggedin,setLogged] = useState<any | null>(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }
  useEffect(()=>{
    detectLogin()
  },[])
  
  if (!isLoadingComplete) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;