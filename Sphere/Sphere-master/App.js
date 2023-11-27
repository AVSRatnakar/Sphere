import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignInScreen } from './screens/SignInScreen';
import { HomeScreen } from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import { CreateNewPost } from './screens/CreateNewPost';

import { useAuthState } from 'react-firebase-hooks/auth';
import { firebase_auth } from './firebase/firebaseConfig';

import { defaultCommunities } from './constants/contant';
import { createCommunityStack } from './Community/CreateCommunityStack';

const Stack = createStackNavigator();

export default function App() {
	const auth = firebase_auth;
	const [user, error] = useAuthState(auth);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='HomeScreen'>
				{user ? (
					<>
						<Stack.Screen name='Home' component={HomeScreen} />
						<Stack.Screen name='User' component={UserScreen} />
						<Stack.Screen name='New Post' component={CreateNewPost} />

						{defaultCommunities.map((community) => (
							<Stack.Screen
								key={community.id}
								name={community.id}
								component={createCommunityStack(community)}
								// children={() => createCommunityStack(community)}
							/>
						))}
					</>
				) : (
					<>
						<Stack.Screen name='SignUp' component={SignInScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
