import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';


class FindBar extends React.Component {
  render() {
		return (
      <Container >
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nom du bar </Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Horaires</Label>
              <Input />
            </Item>
          </Form>
          <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", marginTop: 30 }}>
              <Button onPress={() => this.props.navigation.navigate('ListBar')} style={{ width: 60, borderRadius: 10, justifyContent: "center" }} >
                <Text style={{ color: "#FFFFFF" }}>Chercher</Text>
              </Button>
          </View>
        </Content>
      </Container>
    );}
}

export default FindBar;
