import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Spinner(props) {
	return (
		<View style={[styles.container, props.containerStyle]}>
			<ActivityIndicator size='small' color={props.color || '#fff'} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
