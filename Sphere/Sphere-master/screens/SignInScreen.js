import { useNavigation } from '@react-navigation/native';
import React, { useState, useLayoutEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
	SafeAreaView,
	Image,
	ScrollView,
	Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useAuthState } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS } from '../firebase/errors';
import { firebase_auth } from '../firebase/firebaseConfig';

import Button from '../components/Button';

const Logo = require('../assets/images/sphere-logo.png');

import 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export const SignInScreen = ({ navigation }) => {
	const auth = firebase_auth;
	const user = firebase_auth.currentUser;

	const [userInfo, setUserInfo] = React.useState();
	const [loading, setLoading] = useState(false);

	const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
		iosClientId: '121579376183-p92ed36sob2pquie0rgrbtobl7klkig2.apps.googleusercontent.com',
		androidClientId: '121579376183-4h3k9igm35vqjn3jh4l06sjsndgsbssv.apps.googleusercontent.com',
		expoClientId: '121579376183-uqe8vqoe40860tt22gdef5arnq4vfuuj.apps.googleusercontent.com',
	});
	if (response) {
		console.log('response: ', response);
	}
	if (request) {
		console.log('request: ', request);
	}

	const navigationUsed = useNavigation();

	useLayoutEffect(() => {
		navigationUsed.setOptions({
			headerShown: Platform.OS === 'ios' ? false : true,
		});
	}, []);

	const getLocalUser = async () => {
		try {
			setLoading(true);
			const userJSON = await AsyncStorage.getItem('@user');
			const userData = userJSON ? JSON.parse(userJSON) : null;
			setUserInfo(userData);
		} catch (e) {
			console.log(e, 'Error getting local user');
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		if (response?.type === 'success') {
			const { id_token } = response.params;
			const credential = GoogleAuthProvider.credential(id_token);
			signInWithCredential(auth, credential);
		}
	}, [response]);

	React.useEffect(() => {
		getLocalUser();
		const unsub = onAuthStateChanged(auth, async (user) => {
			if (user) {
				await AsyncStorage.setItem('@user', JSON.stringify(user));
				console.log(JSON.stringify(user, null, 2));
				setUserInfo(user);
			} else {
				console.log('user not authenticated');
			}
		});
		return () => unsub();
	}, []);

	console.log(' ⬆️ user=>>>>>>>>>>', user);
	console.log('🟢 info=>>>>>>>>>>', userInfo);

	// 40 for ios was set and android was 0
	const keyboardVerticalOffset = Platform.OS === 'ios' ? -60 : 0;
	return (
		<SafeAreaView className=' relative bg-[#191a1d] overflow-hidden'>
			<View className='w-full bg-[#292B2F]'>
				<KeyboardAvoidingView behavior='height'>
					<TouchableWithoutFeedback accessible={true} onPress={Keyboard.dismiss}>
						<>
							<View className='relative bg-[#191a1d] h-full justify-center items-center'>
								<View className='p-6 h-full w-full justify-center items-center'>
									<Image source={Logo} style={{ width: 75, height: 75 }} />
									<Text className='text-white text-xl font-bold mt-5'>
										Welcome to Sphere
									</Text>
									<TouchableOpacity
										style={{
											backgroundColor: '#4285F4',
											width: '90%',
											padding: 10,
											borderRadius: 15,
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'center',
											gap: 15,
											marginTop: 80,
											marginBottom: 150,
										}}
										onPress={() => promptAsync()}>
										<AntDesign name='google' size={20} color='white' />
										<Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>
											Sign In with Google
										</Text>
									</TouchableOpacity>
									<View>
										<Text style={{ color: 'gray', fontSize: 17 }}>
											*Make sure to use your university email.
										</Text>
									</View>
								</View>
							</View>
						</>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView>
	);
};
