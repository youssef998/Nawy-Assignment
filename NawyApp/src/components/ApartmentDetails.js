// Import necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define the ApartmentDetails functional component
const ApartmentDetails = ({ route }) => {
  // Extract the 'apartment' object from the route parameters
  const { apartment } = route.params;

  // Styles using the StyleSheet.create method
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 6,
      backgroundColor: '#f0f0f0',
    },
    listItem: {
      padding: 10,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    listItemText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      paddingBottom: 20,
    },
    listDescription: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#666',
      paddingBottom: 20,
    },
    ImagesStyle: {
      width: 380,
      height: 200,
      justifyContent: 'center',
    },
  });

  // Render the component
  return (
    <View style={styles.container}>
      {/* Display the apartment name */}
      <Text style={styles.listItemText}>{apartment.name}'s Details</Text>
      {/* Display apartment details, such as description, size, price, etc. */}
      <Text style={styles.listDescription}>Description: {apartment.description}</Text>
      <Text style={styles.listDescription}>Size: {apartment.size}</Text>
      <Text style={styles.listDescription}>Price: {apartment.price.toLocaleString('en-US')} EGY</Text>
      <Text style={styles.listDescription}>Compound: {apartment.compound}</Text>
      <Text style={styles.listDescription}>Area: {apartment.area}</Text>
      <Text style={styles.listDescription}>Bedrooms: {apartment.bedrooms}</Text>
      <Text style={styles.listDescription}>Property Type: {apartment.propertyType}</Text>

      {/* Display the first image of the apartment */}
      <Image style={styles.ImagesStyle} source={{ uri: apartment.images[0] }} />
    </View>
  );
};

// Export the ApartmentDetails component
export default ApartmentDetails;
