import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryListSlider from "../components/CategoryListSlider";
import Feather from "@expo/vector-icons/Feather";
import TopHeadLine from "../components/TopHeadLine";
import HeadLineList from "../components/HeadLineList";
import GlobalAPI from "../services/GlobalAPI";

export default function Home() {
  const [newList, SetnewList] = useState([]);
  useEffect(() => {
    getheadlinetopic();
  });
  const getheadlinetopic = async () => {
    const result = (await GlobalAPI.getheadlinetopic).data;
    console.log(result);
    SetnewList(result.articles);
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.appname}>NEWS Article</Text>
        <Feather name="bell" size={24} color="black" />
      </View>
      <CategoryListSlider />
      <TopHeadLine newList={newList} />
      <HeadLineList newList={newList} />
    </View>
  );
}

const styles = StyleSheet.create({
  appname: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
});
