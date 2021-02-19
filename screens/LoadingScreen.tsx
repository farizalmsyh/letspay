import React, { useEffect} from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet
  } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const LoadingScreen = (props: any) => {

    const detectLogin= async ()=>{
        const token = await AsyncStorage.getItem('token')
            if(token){
                props.navigation.navigate("Home")
            }else{
                props.navigation.navigate("Login")
            }
      }
    useEffect(()=>{
        detectLogin()
    },[])

    return (
        <View style={styles.loading}> 
            <ActivityIndicator size="large" color="#00af9" />
        </View>
    );
};

const styles= StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center" 
    }
})

export default LoadingScreen;