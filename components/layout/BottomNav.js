import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

