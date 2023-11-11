// ApartmentDetails.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const ApartmentDetails = ({ route }) => {
  const { apartment } = route.params;

  return (
    <View>
      <Text>Apartment Details Page</Text>
      <Text>Name: {apartment.name}</Text>
      <Text>Description: {apartment.description}</Text>
      <Image source={{ uri: apartment.images[0] }} style={{ width: 200, height: 200 }} />
      {/* Add more details as needed */}
    </View>
  );
};

export default ApartmentDetails;
