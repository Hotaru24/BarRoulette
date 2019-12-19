import React, { Fragment } from 'react';
import { View, Text } from 'native-base';


class Menu extends React.Component {
  render() {
		return (
			<View>
				<Text>Concept</Text>
				<Text onPress={() => this.props.navigation.navigate('AddBar')}>Ajouter un bar</Text>
				<Text>On se retrouve sur facebook ?</Text>
				<Text>Envoyez nous un message</Text>
			</View>
		);
	}
}

export default Menu;