import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const ApiAPP = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Sample list of items
  const items = [
    { id: '1', name: 'Value Selling' },
    { id: '2', name: 'Managing Our Manager' },
    { id: '3', name: 'Personal Branding' },
    { id: '4', name: 'Influence' },
    // Add more items as needed
  ];

  // Function to filter items based on the search query
  const filterItems = (query) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search items..."
        onChangeText={(text) => {
          setSearchQuery(text);
          filterItems(text);
        }}
        value={searchQuery}
      />
      <FlatList
        data={filteredItems.length > 0 ? filteredItems : items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default ApiAPP;
