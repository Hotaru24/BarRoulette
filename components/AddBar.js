import React, { Fragment } from 'react';
import { Container, Content, Form, Item, Picker, Label, Input, Icon, Button } from 'native-base';
import { Text, StyleSheet, View } from 'react-native';
import axios from 'axios';

class AddBar extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
      name: '',
      hours: '',
      adress: '',
      selected2: undefined
    };
  }
  onValueChange2 = (value) => {
    this.setState({
      selected2: value
    });
  }
  
  submitForm = () => {
    console.log(this.state);
    let formdata = new FormData();
    formdata.append('name', this.state.name);
    formdata.append('adress', this.state.adress);
    formdata.append('hours', this.state.hours);
    formdata.append('style', this.state.selected2);
    console.log(formdata)

    axios.post('http://192.168.184.24:8000/bar', {
      name: this.state.name,
      adress: this.state.adress,
      hours: this.state.hours,
      style: this.state.selected2
    })
      .then((result) => {
        console.log(result);
    });
  };

  handleChangeName = (event) => {
    console.log(event.nativeEvent.text)
    this.setState({
      name: event.nativeEvent.text
    });
  }

  handleChangeAdress = (event) => {
    this.setState({
      adress: event.nativeEvent.text
    });
  }

  handleChangeHours = (event) => {
    this.setState({
      hours: event.nativeEvent.text
    });
  }

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
              <Input type="text" name={this.state.name} onChange={this.handleChangeName.bind(this)} />
            </Item>
            <Item floatingLabel >
              <Label>Horaires</Label>
              <Input type="text" hours={this.state.hours} onChange={this.handleChangeHours.bind(this)} />
            </Item>
						<Item floatingLabel last>
              <Label>Adresse</Label>
              <Input type="text" adress={this.state.adress} onChange={this.handleChangeAdress.bind(this)} />
            </Item>
						<Item picker style={{ marginTop: 20 }}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Style"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                >
                <Picker.Item label="Pub" value="Pub" />
                <Picker.Item label="Bar à bieres" value="Bar à bieres" />
                <Picker.Item label="Bar à vins" value="Bar à vins" />
								<Picker.Item label="Rock/Metal" value="Rock/Metal" />
								<Picker.Item label="Jazz" value="Jazz" />
                <Picker.Item label="Geek" value="Geek" />
                <Picker.Item label="Latino" value="Latino" />
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