import React from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Footer, FooterTab } from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation  } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header androidStatusBarColor="#007965" iosBarStyle="dark-content" style={{backgroundColor: '#00af91'}}>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Login')}>
            <Text>Login</Text>
          </Button>
        </Right>
      </Header>
      <Content style={{padding: 16}}>
        <Text>
          This is Content Section
        </Text>
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