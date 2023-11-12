// Import necessary components from React and React Native
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Define the ApartmentListing functional component
const ApartmentListing = ({ navigation }) => {
  // State to store the list of apartments
  const [apartments, setApartments] = useState([]);

  // useEffect hook to fetch apartments when the component mounts
  useEffect(() => {
    fetchApartments();
  }, []);

  // Function to fetch apartments from the server
  const fetchApartments = async () => {
    try {
      const response = await fetch('http://192.168.1.17:3001/api/apartments');
      const data = await response.json();
      setApartments(data.apartments);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  // Function to handle pressing on an apartment item
  const handleApartmentPress = (apartment) => {
    navigation.navigate('ApartmentDetails', { apartment });
  };

  // Styles using the StyleSheet.create method
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
    title: {
      paddingBottom: 10,
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
    },
  });

  // Render the component
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nawy Apartments</Text>
      {/* FlatList to render the list of apartments */}
      <FlatList
        data={apartments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleApartmentPress(item)}>
            {/* Each item in the list is a TouchableOpacity wrapping a View */}
            <View style={styles.listItem}>
              {/* Text displaying the apartment name */}
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Export the ApartmentListing component
export default ApartmentListing;
