import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default
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
							<Button onPress={() => Alert.alert('Carte')}>
								<Icon name="map" />
							</Button>
							<Button active onPress={() => Alert.alert('Rechercher un bar')}>
								<Icon active name="search" />
							</Button>
							<Button onPress={() => Alert.alert('Menu')}>
								<Icon name="apps" />
							</Button>
						</FooterTab>
					</Footer>
				</Container>

			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
  navBar: {
		height: '10%',
	},
	map: {
		height: '92%',
	}
});
