import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './components/layout/DrawerNav';
import BottomNav from './components/layout/BottomNav';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
      {/* <BottomNav /> */}
    </NavigationContainer>
  );
}