import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile/ProfileScreen'

const Stack = createNativeStackNavigator();

const TackStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default TackStack;