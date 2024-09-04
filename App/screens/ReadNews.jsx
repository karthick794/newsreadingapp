import { StyleSheet,Image, Text, View, Share } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser'
const ReadNews = () => {
    const news=useRoute().params.news
    const navigation=useNavigation()
    const Sharenews=()=>{
Share.share({
    message:news.title+"\nReadmore"+news.description
})
    }
  return (
    <View style={{backgroundColor:"#fff"}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>  
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Ionicons name="arrow-back-outline" size={24} color="black" />
    </TouchableOpacity> 
<TouchableOpacity onPress={()=>Sharenews()}>
<Ionicons name="share-outline" size={24} color="black" />
</TouchableOpacity>
  
    </View>
    <Image style={{marginTop:5, height:300,width:'100%',borderRadius:15}} source={{uri:news.urlToImage}}/>
    <Text style={{marginTop:10, fontSize:25,fontWeight:'900'}}>{news.title}</Text>
    <Text style={{marginTop:5,color:'blue'}}>{news.source.name}</Text>
    <Text style={{marginTop:5,fontSize:20,lineHeight:30}}>{news.description}</Text>
    <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync(news.url)}>
    <Text style={{marginTop:10,color:'blue'}}>Read More</Text>
    </TouchableOpacity>
    
    </View>
  )
}

export default ReadNews

const styles = StyleSheet.create({})