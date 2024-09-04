import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function HeadLineList({ newList }) {
  return (
    <View>
      <View style={{ marginTop: 10}}>
        <FlatList
          data={newList}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{ display: "flex", flexDirection: "row"}}
              >
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 10,
                  }}
                />
                <View style={{ marginLeft: 10 ,marginRight:10}}>
                  <Text numberOfLines={4}
                    style={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ marginTop: 5, color: "blue" }}>
                    {item.source.name}
                  </Text>
                </View>
                <View style={{ height: 1, backgroundColor: "gray" }} />
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 10,
                  height: 2,
                  backgroundColor: "lightgray",
                }}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
