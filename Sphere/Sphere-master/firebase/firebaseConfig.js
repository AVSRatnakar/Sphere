import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAeQT6wTAOAcMHgXVleSc23ae8tmYDlKr8',

	authDomain: 'sphere-bcdeb.firebaseapp.com',

	databaseURL: 'https://sphere-bcdeb-default-rtdb.asia-southeast1.firebasedatabase.app',

	projectId: 'sphere-bcdeb',

	storageBucket: 'sphere-bcdeb.appspot.com',

	messagingSenderId: '342313052193',

	appId: '1:342313052193:web:ca358e6124e5c0ef449b60',

	measurementId: 'G-RYYWFDW57G',
};

export const firebase_app = initializeApp(firebaseConfig);

const auth = initializeAuth(firebase_app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const firebase_firestore = getFirestore(firebase_app);
export const firebase_auth = auth;
