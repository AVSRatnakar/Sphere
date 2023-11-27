import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Textarea,
	Platform,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { Image } from 'expo-image';
import { ChevronLeftIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import PostComponent from '../components/Post';
import { useNavigation } from '@react-navigation/native';

export const CreateNewPost = ({ navigation }) => {
	const navigationUsed = useNavigation();
	useLayoutEffect(() => {
		navigationUsed.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<SafeAreaView
			className='bg-[#191a1d] min-h-screen overflow-hidden'
			style={Platform.OS === 'android' && { paddingTop: 35 }}>
			<View className='p-2  items-center justify-center'>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className=' absolute p-2 left-0  rounded-full overflow-hidden'>
					<ChevronLeftIcon />
				</TouchableOpacity>
				<Text className='text-white text-xl font-bold ml-2'>Create New Community</Text>
			</View>
			{/* header End */}
			<View className='w-full px-4'>
				<View className='mb-6 w-full'>
					<Text className='text-lg text-white mb-1'>Community Creation form</Text>
					<TextInput
						// onChangeText={onChangeNumber}
						// value={number}
						placeholder='useless placeholder'
						keyboardType='numeric'
					/>
				</View>
			</View>

			{/* END */}
		</SafeAreaView>
	);
};
