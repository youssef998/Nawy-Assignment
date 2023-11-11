// ApartmentDetails.js
import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

const ApartmentDetails = ({ route }) => {
  const { apartment } = route.params;
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
      paddingBottom: 20
    },
    listDescription: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#666',
      paddingBottom: 20
    },
    ImagesStyle: {
      width: 380,
      height:200,
      justifyContent: 'center'
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.listItemText}>{apartment.name}'s Details</Text>
      {/* <Text>Name: {apartment.name}</Text> */}
      <Text style={styles.listDescription}>Description: {apartment.description}</Text>
      <Text style={styles.listDescription}>Size: {apartment.description}</Text>
      <Text style={styles.listDescription}>Price: {apartment.price.toLocaleString('en-US')} EGY</Text>
      <Text style={styles.listDescription}>Compound: {apartment.compound}</Text>
      <Text style={styles.listDescription}>Area: {apartment.area}</Text>
      <Text style={styles.listDescription}>Bedrooms: {apartment.bedrooms}</Text>
      <Text style={styles.listDescription}>Property Type: {apartment.propertyType}</Text>

      <Image style={styles.ImagesStyle} source={{ uri: apartment.images[0] }}  />
    </View>
  );
};

export default ApartmentDetails;
