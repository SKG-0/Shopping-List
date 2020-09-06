import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList,Alert } from "react-native";
import {v4 as uuidv4} from 'uuid';
import ListItem from "./components/ListItem";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import { v4 } from "react-native-uuid";
const App = () => {
  const [items, setitems] = useState([
    { id: v4(), text: "Milk" },
    { id: v4(), text: "Eggs" },
    { id: v4(), text: "Bread" },
    { id: v4(), text: "Juice" },
  ]);
  const deleteitem = (id) => {
    setitems((previtems) => {
      return previtems.filter((item) => item.id != id);
    });
  };
  const additem = (text) => {
    if(!text){
      Alert.alert('Error','Please enter an item');
    }
    else{
      setitems((previtems) => {
        return [{ id:v4(), text }, ...previtems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem additem={additem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteitem={deleteitem} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
