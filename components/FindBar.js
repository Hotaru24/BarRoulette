import React, { Fragment } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Picker } from 'native-base';


class FindBar extends React.Component {
  render() {
		return (
      <Container>
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
        </Content>
      </Container>
    );}
}

export default FindBar;
