import React, { Fragment } from 'react';
import { Container, Header, Content, Form, Item, Picker, Label, Input, Icon } from 'native-base';


class AddBar extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
	}
	
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
						<Item floatingLabel last>
              <Label>Adresse</Label>
              <Input />
            </Item>
						<Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Pub" value="key0" />
                <Picker.Item label="Bar à bieres" value="key1" />
                <Picker.Item label="Bar à vins" value="key2" />
								<Picker.Item label="Rock/Metal" value="key2" />
								<Picker.Item label="Jazz" value="key2" />
                <Picker.Item label="Geek" value="key3" />
                <Picker.Item label="Latino" value="key4" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );}
}

export default AddBar;