// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApartmentListing from '../components/ApartmentListing';
import ApartmentDetails from '../components/ApartmentDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApartmentListing">
        <Stack.Screen name="ApartmentListing" component={ApartmentListing} />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
