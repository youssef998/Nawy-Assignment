import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApartmentListing from './src/components/ApartmentListing';
import ApartmentDetails from './src/components/ApartmentDetails';

// Create a stack navigator
const Stack = createStackNavigator();

// The main component of the application
const App = () => {
  return (
    // The root component that manages the navigation state
    <NavigationContainer>
      {/* The stack navigator manages the navigation stack and screens */}
      <Stack.Navigator initialRouteName="ApartmentListing">
        {/* Screen for the Apartment Listing */}
        <Stack.Screen name="Nawy" component={ApartmentListing} />
        {/* Screen for the Apartment Details */}
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
