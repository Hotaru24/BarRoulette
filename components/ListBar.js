import React, { Fragment } from 'react';
import { Text, View, Image } from 'react-native';
import Bar from './Bar';

class ListBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barList: [{
        name: "le bon bar cool",
        address: "20 allée du Champignon",
        hour: "00h-00h",
        style: "Swaggé"
      },
      {
        name: "le bon bar cool",
        address: "20 allée du Champignon",
        hour: "00h-00h",
        style: "Swaggé"
      },
      {
        name: "le bon bar cool",
        address: "20 allée du Champignon",
        hour: "00h-00h",
        style: "Swaggé"
      }
      ]
    }
  }
  render() {
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#76E0DB' }}>
        {this.state.barList.map((barInfo, i) => <Bar key={i} {...barInfo} />)}
      </View>
    )
  }
}

export default ListBar; 