import { View, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';

export default function CircleButton({ onPress }) {
	return (
		<View style={styles.circleButtonContainer}>
			<TouchableOpacity style={styles.circleButton} onPress={onPress}>
				<FontAwesome name='microphone' size={28} color='black' />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	circleButtonContainer: {
		width: 70,
		height: 70,
		marginHorizontal: 60,
		borderWidth: 4,
		borderColor: '#ffd33d',
		borderRadius: 42,
		padding: 3,
	},
	circleButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 42,
		backgroundColor: '#fff',
	},
});
