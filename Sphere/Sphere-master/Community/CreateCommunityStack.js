// CommunityStack.js

import { createStackNavigator } from '@react-navigation/stack';

// Import all community screen components
import ClassroomScreen from './Classroom';
import TrainingScreen from './Training';
import ExamScreen from './Exam';
// Import other community screen components similarly

export const createCommunityStack = (community) => {
	const Stack = createStackNavigator();

	let CommunityScreenComponent;

	// Determine the appropriate community screen component based on the community name
	switch (community.id) {
		case 'classroom':
			CommunityScreenComponent = ClassroomScreen;
			break;
		case 'training':
			CommunityScreenComponent = TrainingScreen;
			break;
		case 'exam':
			CommunityScreenComponent = ExamScreen;
			break;
		// Add cases for other community screen components
		default:
			CommunityScreenComponent = () => null; // A default component if needed
	}
	return CommunityScreenComponent;

	// return (
	// 	<Stack.Navigator>
	// 		<Stack.Screen name={community.name} component={CommunityScreenComponent} />
	// 		{/* Add more screens as needed for each community */}
	// 	</Stack.Navigator>
	// );
};
