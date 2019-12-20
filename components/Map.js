import React, { Fragment } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Footer, FooterTab, Button, Icon } from 'native-base';


	class Map extends React.Component {
		render() {
			return (
				<Fragment>
					<MapView
					style={styles.map}
					provider={PROVIDER_GOOGLE}
					showsUserLocation
					initialRegion={{
					latitude: 47.21725,
					longitude: -1.55336,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421}}
						/>

					<Container style={styles.navBar}>
						<Footer>
							<FooterTab>
								<Button block onPress={() => this.props.navigation.navigate('Home')}>
									<Icon name="map" />
								</Button>
								<Button active onPress={() => this.props.navigation.navigate('FindBar')}>
									<Icon active name="search" />
								</Button>
								<Button onPress={() => this.props.navigation.navigate('Menu')}>
									<Icon name="apps" />
								</Button>
								
							</FooterTab>
						</Footer>
					</Container>

				</Fragment>
		);}
}

const styles = StyleSheet.create({
  navBar: {
		height: '10%',
	},
	map: {
		height: '92%',
	}
});

export default Map;