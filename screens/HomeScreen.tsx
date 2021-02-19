import React, {useState, useEffect} from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Footer, FooterTab, Card, CardItem } from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = (props: any) => {
  
  const [id, setId] = useState("loading...");
  const [name, setName] = useState("loading...");
  const [email, setEmail] = useState("loading...");

  const Boiler = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.1.101:3000/', {
      headers: new Headers({
        Authorization: "Bearer " +token
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      setId(data.id);
      setName(data.name);
      setEmail(data.email);
    })
  }

  useEffect(() => {
    Boiler()
  }, [])

  

  const logout =(props : any)=>{
    AsyncStorage.removeItem("token").then(()=>{
      props.navigation.replace("Login")
    })
 }

  return (
    <Container>
      <Header androidStatusBarColor="#007965" iosBarStyle="light-content" style={{backgroundColor: '#00af91'}}>
        <Body style={{marginLeft: '3%'}}>
          <Title>LetsPay</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => logout(props)}>
            <Text>Log Out</Text>
          </Button>
        </Right>
      </Header>
      <Content style={{padding: 16,}}>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Card style={{borderRadius: 10, marginTop: '20%'}}>
            <CardItem style={{margin: 5}}>
              <Body>
                <Button transparent vertical >
                  <Icon style={{fontSize: 22, color: '#00af91', marginBottom: 8}} type="AntDesign" name="pluscircle" />
                  <Text style={{fontSize: 10, color: '#00af91'}}>Top Up</Text>
                </Button>
              </Body>
              <Body>
                <Button transparent vertical>
                  <Icon style={{fontSize: 22, color: '#00af91', marginBottom: 8}} type="MaterialCommunityIcons" name="transfer" />
                  <Text style={{fontSize: 10, color: '#00af91'}}>Transfer</Text>
                </Button>
              </Body>
              <Body>
                <Button transparent vertical>
                  <Icon style={{fontSize: 22, color: '#00af91', marginBottom: 8}} type="FontAwesome5" name="history" />
                  <Text style={{fontSize: 10, color: '#00af91'}}>History</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
      </Content>
      <Footer>
        <FooterTab style={{backgroundColor: '#00af91'}}>
          <Button vertical>
            <Icon type="Entypo" name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="scan" />
            <Text>Scan</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome5" name="user-circle" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default HomeScreen;