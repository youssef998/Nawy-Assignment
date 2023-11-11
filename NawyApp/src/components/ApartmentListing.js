// ApartmentListing.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const ApartmentListing = ({ navigation }) => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const response = await fetch('http://192.168.1.17:3001/api/apartments');
      const data = await response.json();
      setApartments(data.apartments);
      // console.log(data)
      // console.log("data")
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  const handleApartmentPress = (apartment) => {
    navigation.navigate('ApartmentDetails', { apartment });
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
    title: {
      paddingBottom:10  
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
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Nawy Apartments</Text>
      <FlatList
        data={apartments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleApartmentPress(item)}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ApartmentListing;
