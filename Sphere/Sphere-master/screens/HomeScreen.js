import { View, Text, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { firebase_auth } from '../firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

import Post from '../components/Post';
import { PlusCircleIcon } from 'react-native-heroicons/outline';
import { ChevronRightIcon } from 'react-native-heroicons/solid';

import { defaultCommunities } from '../constants/contant';

import { VoiceComponent } from '../components/Voice';

export const HomeScreen = ({ navigation }) => {
	const Logo = require('../assets/images/sphere-logo.png');
	const Avatar = require('../assets/images/studentavatar.png');

	const navigationUsed = useNavigation();

	const auth = firebase_auth;
	const [user, loading] = useAuthState(auth);
	useLayoutEffect(() => {
		navigationUsed.setOptions({
			headerShown: false,
		});
	}, []);

	const handleUserPress = () => {
		navigation.navigate('User');
	};

	return (
		<>
			<VoiceComponent />

			<SafeAreaView
				className=' min-h-screen bg-[#191a1d] overflow-hidden '
				style={Platform.OS === 'android' && { paddingTop: 35 }}>
				<View className='p-2 flex-row items-center justify-between'>
					<View className='flex-row items-center '>
						<Image source={Logo} style={{ width: 35, height: 35 }} />
						<Text className='text-white text-xl font-bold ml-2'>Sphere</Text>
					</View>
					<View className='flex-row gap-2 items-center '>
						<TouchableOpacity onPress={() => navigation.navigate('New Post')}>
							<PlusCircleIcon size={30} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={handleUserPress}
							className='rounded-full overflow-hidden bg-white'>
							<Image
								source={user?.photoURL ? { uri: user?.photoURL } : Avatar}
								className='object-center rounded-full bg-white'
								style={{ width: 35, height: 35 }}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View className='h-[0.5px] w-full bg-white/10 backdrop-blur-xl' />

				{/* header End */}

				<ScrollView className=' relative mb-20 px-2 py-3'>
					<View className='gap-2'>
						<Text className='text-white/70 text-xl'>Communities</Text>

						{defaultCommunities.map((community, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => navigation.navigate(community.id)}>
								<View className=' px-3 py-4 bg-white/10 backdrop-blur-sm rounded-md'>
									<View className=' flex-row items-center justify-between'>
										<Text className='text-lg text-white font-bold'>{community.name}</Text>
										<ChevronRightIcon size={20} />
									</View>
								</View>
							</TouchableOpacity>
						))}
					</View>
					<Text className='text-white/70 text-2xl p-2'>Feed</Text>
					<Post />
				</ScrollView>

				{/* END */}
			</SafeAreaView>
		</>
	);
};
