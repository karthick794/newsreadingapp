import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function CategoryListSlider({selectcategory}) {
  const [active, setActive] = useState(1);
  const categoryList = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "Politics",
    },
    {
      id: 3,
      name: "Cinema",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Weather",
    },
    {
      id: 6,
      name: "Kownledge",
    },
  ];
  function onclickcategory(id) {
    setActive(id);
  }
  return (
    <View style={{ marginRight: 10, marginTop: 10 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            onclickcategory(item.id), selectcategory(item.name)}}>
            <Text
              style={item.id == active ? styles.selected : styles.unselected}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  selected: {
    fontSize: 20,
    marginRight: 15,
    fontWeight: 20,
    fontWeight: "bold",
    color: "green",
  },
  unselected: {
    fontSize: 20,
    marginRight: 15,
    fontWeight: 20,
    fontWeight: "bold",
    color: "black",
  },
});
