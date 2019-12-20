import React, { Fragment } from 'react';
import { Container, Content, Form, Item, Picker, Label, Input, Icon, Button } from 'native-base';
import { Text, StyleSheet, View } from 'react-native';
import axios from 'axios';






class AddBar extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      form: {
        name: '',
        hours: '',
        adress: '',
        style: ''
      }

    };
  }
  
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
	}
  
  submitForm = () => {
    axios.post('http://192.168.184.19:8000/advert', {
      name: form.name,
      hours: form.hours,
      adress: form.adress,
      style: form.style,
    }).then((result) => {
      console.log(result);
    });
  };

  render() {
		return (
      <Container>
        <Content >
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 20, alignContent: "center" }}>Ajouter un Bar</Text>
          </View>

          <Form>
            <Item floatingLabel>
              <Label>Nom du bar </Label>
              <Input onChange={(event) => this.setState({ ...form, name: event.target.value})}/>
            </Item>
            <Item floatingLabel >
              <Label>Horaires</Label>
              <Input onChange={(event) => this.setState({ ...form, hours: event.target.value})}/>
            </Item>
						<Item floatingLabel last>
              <Label>Adresse</Label>
              <Input onChange={(event) => this.setState({ ...form, adress: event.target.value})}/>
            </Item>
						<Item picker style={{ marginTop: 20 }}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                onChange={(event) => this.setState({ ...form, style: event.target.value})}
              >
                <Picker.Item label="Pub" value="key0" />
                <Picker.Item label="Bar à bieres" value="key1" />
                <Picker.Item label="Bar à vins" value="key2" />
								<Picker.Item label="Rock/Metal" value="key3" />
								<Picker.Item label="Jazz" value="key4" />
                <Picker.Item label="Geek" value="key5" />
                <Picker.Item label="Latino" value="key6" />
              </Picker>
            </Item>
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", marginTop: 20 }}>
              <Button onPress={this.submitForm} style={{ width: 60, borderRadius: 10, justifyContent: "center" }} >
                <Text>Ajouter</Text>
              </Button>
            </View>
            
          </Form>
        </Content>
      </Container>
    );}
}

export default AddBar;