import {
	StyleSheet,
	View,
	Pressable,
	Text,
	ActivityIndicatorn,
	ActivityIndicator,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ label, theme, onPress, loading }) {
	if (theme === 'primary') {
		return (
			<Pressable
				disabled={loading}
				onPress={onPress}
				className={`w-3/12 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 shadow-sm ${
					loading ? 'opacity-80' : 'opacity-100'
				}`}>
				{loading ? (
					<ActivityIndicator style={{ height: 17 }} color='#fff' />
				) : (
					<Text className='text-white font-bold text-sm'>{label}</Text>
				)}
			</Pressable>
		);
	}
	return (
		<Pressable
			disabled={loading}
			onPress={onPress}
			className={`w-3/12 inline-flex items-center rounded-md bg-[#ED4245] px-3 py-2 shadow-sm ${
				loading ? 'opacity-80' : 'opacity-100'
			}`}>
			{loading ? (
				<ActivityIndicator style={{ height: 17 }} color='#fff' />
			) : (
				<Text className='text-white font-bold text-sm'>{label}</Text>
			)}
		</Pressable>
	);
}
