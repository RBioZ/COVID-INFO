import React from 'react';
import {StyleSheet,View,Text,ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import constants from 'expo-constants';
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';

export default function Devs(){


  const navigation = useNavigation();
  
  function navigateBack() {
    navigation.goBack();
  }


  return(
      <ImageBackground style={styles.background} source={require('../../../assets/background-2.png')}>
        <View style={styles.viewBack}>
          <TouchableOpacity onPress={navigateBack} style={{paddingTop:constants.statusBarHeight}} >
            <Feather color={'#666'} size={30} name='chevron-left'></Feather>
          </TouchableOpacity>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>SIGA-NOS</Text>
        </View>
        <AdMobBanner
              style={{position:'absolute',bottom:0}}
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-2415885204681618/4497652900"
              servePersonalizedAds
              onDidFailToReceiveAdWithError={(err) => {console.log(err)}} />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewBack:{
    paddingTop:5,
    flexDirection:'row'
  },
  viewText:{
    flex:1,
    //backgroundColor:'red',
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:250
  },
  text:{
    fontSize:25,
    color:'#FFF',
    fontFamily:'sans-serif-light'
  }
})