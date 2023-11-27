import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Pressable,
	RefreshControl,
} from 'react-native';
import { BellAlertIcon } from 'react-native-heroicons/outline';
import { firebase_auth, firebase_firestore } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import {
	collection,
	addDoc,
	orderBy,
	query,
	onSnapshot,
	serverTimestamp,
	doc,
	getDoc,
} from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { Avatar, GiftedChat } from 'react-native-gifted-chat';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const Classroom = ({ navigation }) => {
	const [messages, setMessages] = useState([]);
	const [members, setMembers] = useState([]);
	const onSignOut = () => {
		signOut(firebase_auth).catch((error) => console.log('Error logging out: ', error));
	};

	const isMember = members.includes(Number(firebase_auth.currentUser.email.split('@')[0]));
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	useLayoutEffect(() => {
		// Fetch the list of members from the Firestore document
		const classroomDocRef = doc(firebase_firestore, 'communities', 'classroom');
		const fetchMembers = async () => {
			const classroomDoc = await getDoc(classroomDocRef);
			const membersArray = classroomDoc.data().members || [];
			setMembers(membersArray);
			console.log('membersArray', members);
		};
		fetchMembers();
	}, []);

	useLayoutEffect(() => {
		const classroomDocRef = doc(firebase_firestore, 'communities', 'classroom');
		const q = query(collection(classroomDocRef, 'messages'), orderBy('createdAt', 'desc'));

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			console.log('querySnapshot unsubscribe');
			setMessages(
				querySnapshot.docs.map((doc) => ({
					_id: doc.id,
					createdAt: doc.data().createdAt ? doc.data().createdAt.toDate() : new Date(),
					text: doc.data().text,
					user: {
						_id: doc.data().uid, // Use UID as the user ID
						name: doc.data().name, // Sender name
						email: doc.data().email, // Sender email
						avatar: doc.data().avatar,
					},
				}))
			);
		});
		return unsubscribe;
	}, []);

	const onSend = async (newMessages = []) => {
		const message = newMessages[0];
		const messageData = {
			createdAt: serverTimestamp(), // Use server timestamp for sent time
			text: message.text,
			uid: firebase_auth?.currentUser?.uid, // Sender's UID
			name: firebase_auth?.currentUser?.displayName, // Sender's display name (if available)
			email: firebase_auth?.currentUser?.email, // Sender's email (if available)
			avatar: firebase_auth?.currentUser.photoURL,
		};

		const classroomDocRef = doc(firebase_firestore, 'communities', 'classroom');
		const messagesCollectionRef = collection(classroomDocRef, 'messages');

		try {
			await addDoc(messagesCollectionRef, messageData);
		} catch (error) {
			console.error('Error adding message: ', error);
		}
	};

	return (
		<>
			<SafeAreaView
				className='bg-[#191a1d] min-h-screen overflow-hidden'
				style={Platform.OS === 'android' && { paddingTop: 35 }}>
				<View className='p-2 items-center justify-between'>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className=' absolute p-2 left-0  rounded-full overflow-hidden'>
						<ChevronLeftIcon />
					</TouchableOpacity>
					<Text className='text-white text-xl font-bold ml-2'>Classroom 🧑‍🎓</Text>
					<Pressable
						onPress={() => {}}
						className='  absolute px-2 py-1 rounded-md right-0 mr-2'>
						<BellAlertIcon />
					</Pressable>
				</View>
				{/* header End */}

				{/* END */}
				<GiftedChat
					messages={messages}
					disableComposer={!isMember}
					showAvatarForEveryMessage={false}
					showUserAvatar={false}
					onSend={(messages) => onSend(messages)}
					messagesContainerStyle={{
						backgroundColor: '#191a1d',
					}}
					textInputStyle={{
						backgroundColor: '#fff',
						borderRadius: 20,
					}}
					user={{
						_id: firebase_auth?.currentUser?.uid,
						avatar: firebase_auth?.currentUser?.photoURL,
					}}
				/>
				{!isMember && (
					<Text style={{ color: 'red', textAlign: 'center' }}>
						You can&apos; send message in this community.
					</Text>
				)}
			</SafeAreaView>
		</>
	);
};

export default Classroom;
