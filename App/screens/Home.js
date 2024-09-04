import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryListSlider from "../components/CategoryListSlider";
import Feather from "@expo/vector-icons/Feather";
import TopHeadLine from "../components/TopHeadLine";
import HeadLineList from "../components/HeadLineList";
import GlobalAPI from "../services/GlobalAPI";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

export default function Home() {
  const [newList, SetnewList] = useState([]);
  const [loading,setloading]=useState(true)
  useEffect(() => {
    //getheadlinetopic();
    getcategory('latest')
  });
  const getcategory = async (data) => {
    setloading(true)
    const result = (await GlobalAPI.getcategory(data)).data;
    console.log(result);
    SetnewList(result.articles);
    setloading(false)
  };
  const getheadlinetopic = async () => {
    const result = (await GlobalAPI.getheadlinetopic).data;
    console.log(result);
    SetnewList(result.articles);
  };
  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
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
      <CategoryListSlider selectcategory={(category)=>{getcategory(category)}} />
      <TopHeadLine newList={newList} />
      <HeadLineList newList={newList} />
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appname: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
});
