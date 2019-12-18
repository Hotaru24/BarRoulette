import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default
class Map extends React.Component {
	render() {
		return (
			<MapView
				 style={{ flex: 1 }}
				 provider={PROVIDER_GOOGLE}
				 showsUserLocation
				 initialRegion={{
				 latitude: 47.21725,
				 longitude: -1.55336,
				 latitudeDelta: 0.0922,
				 longitudeDelta: 0.0421}}
			/>
		);
	}
}

