import React,{useEffect,useState} from 'react';
import { ImageBackground, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';

export default function App() {

  const navigation = useNavigation();
  
  function navigateBack() {
    navigation.goBack();
  }

  return (
    
    <View style={styles.container}>
        <TouchableOpacity onPress={navigateBack} style={{paddingTop:Constants.statusBarHeight,position:'absolute',zIndex:5,top:5,left:1}} >
          <Feather color={'#666'} size={30} name='chevron-left'></Feather>
        </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.text}>EM BREVE</Text>
      </View>
      <AdMobBanner
          style={{position:'absolute',bottom:0}}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-2415885204681618/4497652900"
          servePersonalizedAds
          onDidFailToReceiveAdWithError={(err) => {console.log(err)}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,

  },
  textView:{
    flex:1,
    textAlign:'center',
    alignItems:'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
    fontFamily:'sans-serif-light',
    color:'#8A67D2'
  }

});
