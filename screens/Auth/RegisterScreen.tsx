import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Footer, FooterTab, Form, Item, Input, Label } from 'native-base';
import { useNavigation  } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = (props: any) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const SignUp = async ()=>{
        if(name !== '' || email !== '' || password !== '' ) {
            fetch('http://192.168.1.101:3000/register',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    "name": name,
                    "email": email,
                    "password": password,
                })
            })
            .then(res=>res.json())
            .then(async (data)=>{
                try {
                    console.log(data)
                    await AsyncStorage.setItem('token', data.token)
                    props.navigation.navigate("Home")
                } catch (e) {
                    console.log("error hai",e);
                    Alert.alert('Error', 'Register Failed !');
                }
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Error', 'Register Failed !');
            })
        } else {
            Alert.alert('Error', 'Register Failed !');
        }
    }

    return (
        <Container>
            <Content>
                <View style={{flex: 1, alignItems: 'center', marginVertical: 36}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Sign Up</Text>
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Fullname</Label>
                        <Input onChangeText={(text) => {setName(text)}} value={name} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={(text) => {setEmail(text)}} value={email} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input onChangeText={(text) => {setPassword(text)}} value={password} secureTextEntry={true} />
                    </Item>
                    <Button onPress={() => SignUp()} style={{marginTop: 32, marginHorizontal: 16}} success block>
                        <Text>Sign Up</Text>
                    </Button>
                    <Button onPress={() => props.navigation.navigate('Login')} style={{marginTop: 10, marginHorizontal: 16}} transparent block>
                        <Text>Already have an account ? Sign In</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default RegisterScreen;