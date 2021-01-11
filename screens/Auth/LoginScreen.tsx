import React from 'react';
import {View} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Footer, FooterTab, Form, Item, Input, Label } from 'native-base';
import { useNavigation  } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Content>
                <View style={{flex: 1, alignItems: 'center', marginVertical: 36}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>SIGN IN</Text>
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input/>
                    </Item>
                    <Button onPress={() => navigation.navigate('Home')} style={{marginTop: 32, marginHorizontal: 16}} success    block>
                        <Text>Submit</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default LoginScreen;