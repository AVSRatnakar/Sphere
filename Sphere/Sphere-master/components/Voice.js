import { View, Text } from 'react-native';
import React, { useState } from 'react';
import * as Speech from 'expo-speech';
import * as Permissions from 'expo-permissions';
import { firebase_auth } from '../firebase/firebaseConfig';

import CircleButton from './CircleButton';

export const VoiceComponent = () => {
	const firstName = firebase_auth?.currentUser?.displayName.split(' ')[0];
	const speak = async () => {
		const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
		const thingToSay = `Hi ${firstName}, I am Sphere, your personal assistant. Please share your query.`;
		Speech.speak(thingToSay, {
			language: 'en',
			pitch: 1,
			rate: 1,
		});
	};

	return (
		<View
			style={{ zIndex: 50 }}
			className=' absolute w-full py-6 bottom-0 justify-center items-center'>
			<CircleButton onPress={speak} />
		</View>
	);
};
