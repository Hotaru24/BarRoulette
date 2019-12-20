import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';


class Menu extends React.Component {
  render() {
		return (
			<View>
				<Text>Concept</Text>
				<Button bordered success onPress={() => this.props.navigation.navigate('AddBar')}>
					<Text >Ajouter un bar</Text>
				</Button>
				<Text>On se retrouve sur facebook ?</Text>
				<Text>Envoyez nous un message</Text>
			</View>
		);
	}
}

export default Menu;