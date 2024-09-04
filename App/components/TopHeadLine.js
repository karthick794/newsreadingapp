import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TopHeadLine({ newList }) {
  const navigation=useNavigation()
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={newList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('Read',{news:item})}
            style={{ width: Dimensions.get("screen").width * 0.8 }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.77,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: "900" }}>
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: "blue" }}>
              {item.source.name}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
