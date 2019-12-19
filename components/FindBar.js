import React, { Fragment } from './node_modules/react';
import { Container, Header, Content, Form, Item, Input, Label, Picker } from 'native-base';

const FindBar = () => {
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
  );
}

export default FindBar;