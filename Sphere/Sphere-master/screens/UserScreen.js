import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	ActivityIndicator,
} from 'react-native';
import React, { useLayoutEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { AcademicCapIcon } from 'react-native-heroicons/outline';
import { IdentificationIcon } from 'react-native-heroicons/outline';
import { PencilSquareIcon } from 'react-native-heroicons/outline';

import Button from '../components/Button';

import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { firebase_auth } from '../firebase/firebaseConfig';

export default function UserScreen({ navigation }) {
	const Avatar = require('../assets/images/studentavatar.png');
	const userBackground = require('../assets/images/userBackground.png');
	const navigationUsed = useNavigation();

	const auth = firebase_auth;
	const [user, error] = useAuthState(auth);
	useLayoutEffect(() => {
		navigationUsed.setOptions({
			headerShown: Platform.OS === 'ios' ? false : true,
		});
	}, []);

	const handlePress = () => {
		navigation.goBack();
	};
	const handleSave = () => {
		alert('Open User edit screen');
	};

	const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
	return (
		<SafeAreaView className=' relative bg-[#191a1d] overflow-hidden'>
			<ScrollView className='w-full bg-[#292B2F]'>
				<KeyboardAvoidingView
					behavior='position'
					keyboardVerticalOffset={keyboardVerticalOffset}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<>
							<Image source={userBackground} className='w-full' />
							<TouchableOpacity
								onPress={handlePress}
								className=' absolute p-2 rounded-full overflow-hidden'>
								<ChevronLeftIcon />
							</TouchableOpacity>
							<View className='p-4 flex-col items-start -top-12'>
								<View className='flex-row w-full items-center justify-between'>
									<View className='relative p-2 bg-[#292B2F] rounded-full'>
										<Image
											source={user?.photoURL ? { uri: user?.photoURL } : Avatar}
											className='object-center rounded-full bg-white'
											style={{ width: 75, height: 75 }}
										/>
										<View className='absolute bottom-2 right-1 p-1 bg-[#292B2F] rounded-full'>
											<View className='w-3.5 h-3.5 bg-green-500 rounded-full' />
										</View>
									</View>
									<TouchableOpacity onPress={handleSave}>
										<View className='p-2'>
											<PencilSquareIcon style={{ color: 'grey' }} />
										</View>
									</TouchableOpacity>
								</View>
								<View className='w-full flex-row items-center flex-wrap'>
									<Text className='text-white text-2xl font-bold'>
										{/* {user?.email.split('@')[0]} */}
										{user?.displayName}
									</Text>
									<Text className='text-gray-500 text-base font-semibold ml-2'>
										{user?.email.split('@')[0]}
									</Text>
								</View>

								<View className='my-3 w-full h-[1px] bg-[#3d4046]' />
								<View className='w-full'>
									<Text className='text-white/50 text-lg font-bold'>
										ORGANIZATIONAL DETAILS
									</Text>
									<View className='py-3 px-2 justify-center bg-[#393C43] rounded-md'>
										<View className='flex-row items-center'>
											<AcademicCapIcon style={{ color: 'grey' }} />
											<Text className='text-white text-base font-semibold ml-2'>
												Parul University
											</Text>
										</View>
										<View className='flex-row items-center'>
											<IdentificationIcon style={{ color: 'grey' }} />
											<Text className='text-white text-base font-semibold ml-2'>
												{user?.email.split('@')[0]} • 7B8
											</Text>
										</View>
									</View>
								</View>
								<View className='my-3 w-full h-[1px] bg-[#3d4046]' />
								<View className='w-full'>
									<Text className='text-white/50 text-lg font-bold'>ABOUT ME</Text>
									<View className='py-3 px-2 flex-row items-center bg-[#393C43] rounded-md '>
										<Text className=' w-full text-white text-sm font-semibold line '>
											I&apos;m {user?.displayName}. My Enrollment number is{' '}
											{user?.email.split('@')[0]} and my email is {user?.email}
										</Text>
									</View>
								</View>
								<View className='my-3 w-full h-[1px] bg-[#3d4046]' />
								<View className='w-full'>
									<Text className='text-white/50 text-lg font-bold'>NOTE</Text>
									<View className='py-3 px-2 flex-row items-center bg-[#393C43] rounded-md'>
										<Text className='text-white text-sm font-semibold line'>
											#LifeAtPu #ParulUniversity #Sphere
										</Text>
									</View>
								</View>
								<View className='w-full pt-2'>
									<Button label='Signout' onPress={() => auth.signOut()} />
								</View>
							</View>
						</>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView>
	);
}
