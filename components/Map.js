import React, { Fragment } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

const Map = () => {
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
							<Button onPress={() => Alert.alert('Bar 1')}>
								<Icon name="map" />
							</Button>
							<Button active onPress={() => Alert.alert('Bar 2')}>
								<Icon active name="search" />
							</Button>
							<Button onPress={() => Alert.alert('Bar 3')}>
								<Icon name="apps" />
							</Button>
							<Button onPress={() => Alert.alert('Bar 4')}>
								<Icon name="apps" />
							</Button>
							<Button onPress={() => Alert.alert('Bar 5')}>
								<Icon name="apps" />
							</Button>
						</FooterTab>
					</Footer>
				</Container>

			</Fragment>
		);
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