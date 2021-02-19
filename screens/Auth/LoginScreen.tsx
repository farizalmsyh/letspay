import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Footer, FooterTab, Form, Item, Input, Label } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = (props: any) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = async ()=>{
        fetch('http://192.168.1.101:3000/login',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "email": email,
                "password": password,
            })
        })
        .then(res => res.json())
        .then(async (data)=>{
            try {
                await AsyncStorage.setItem('token', data.token)
                props.navigation.navigate("Home");
            } catch (e) {
                Alert.alert('Error', 'Login Failed !');
            }
        })
    }
    return (
        <Container>
            <Content>
                <View style={{flex: 1, alignItems: 'center', marginVertical: 36}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>SIGN IN</Text>
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={(text) => {setEmail(text)}} value={email} autoCapitalize={'none'} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input onChangeText={(text) => {setPassword(text)}} value={password} secureTextEntry={true}/>
                    </Item>
                    <Button onPress={() => SignIn()} style={{marginTop: 32, marginHorizontal: 16}} success block>
                        <Text>Submit</Text>
                    </Button>
                    <Button onPress={() => props.navigation.navigate('Register')} style={{marginTop: 10, marginHorizontal: 16}} transparent block>
                        <Text>Don't have an account ? Sign Up</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default LoginScreen;