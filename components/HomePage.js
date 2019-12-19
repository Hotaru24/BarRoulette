import React, { Fragment } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base';

class HomePage extends React.Component {
  render() {
  return(
    <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
      <Image style={{ width: 200, height: 200,  }} source={require('../assets/logo-projet3.png')} />
      <Text style={{ width: '90%'}}>
        Laissez nous organiser votre soirée, en vous dégottant les meilleurs bars selon vos critères. 
        Nous choisissons parmis notre sélection personnelle de bars pas piqué des hannetons. Tout ces 
        bons plans de derrière les fagots vous promettent (façon de parler pas de poursuites svp) des 
        soirées de folies ! :)
      </Text>
      <Button bordered success style={{ marginTop: 30 }} onPress={() => this.props.navigation.navigate('Map')}>
        <Text> ÉÉZÉPARTIII </Text>
      </Button>
    </View>
  )}
}

export default HomePage;