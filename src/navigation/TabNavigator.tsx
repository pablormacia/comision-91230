import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/profile/ProfileScreen";
import TaskStack from "./TaskStack";
import Ionicons from "@react-native-vector-icons/ionicons";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          // No mostrar el texto de los tabs
          tabBarShowLabel: false,

          // Colores según el estado
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.primarySoft,
        }}
      >
        <Tab.Screen
          name="Home"
          component={TaskStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="checkmark-circle-outline"
                size={32}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="person-outline"
                size={32}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}