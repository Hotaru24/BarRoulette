import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Right, Icon } from 'native-base';


class Menu extends React.Component {
  render() {
		

	return (
		<Container>
			<Header />
			<Content>
				<List>
					<ListItem style={{ marginTop:  20 }} onPress={() => this.props.navigation.navigate('HomePage')}>
						<Left>
							<Text>Concept</Text>
						</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<ListItem style={{ marginTop:  20 }} onPress={() => this.props.navigation.navigate('AddBar')}>
					<Left>
						<Text >Ajouter un bar</Text>
					</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<ListItem style={{ marginTop:  20 }}>
						<Left>
							<Text> <Icon active name="logo-facebook" />  On se retrouve sur facebook ?</Text>
						</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<ListItem style={{ marginTop:  20 }}>
						<Left>
							<Text>Envoyez nous un message</Text>
						</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
				</List>
			</Content>
		</Container>
	);

}
}

export default Menu;