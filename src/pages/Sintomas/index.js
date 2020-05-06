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
      <ImageBackground style={styles.background} source={require('../../../assets/background-4.png')}>
        <View style={styles.viewBack}>
          <TouchableOpacity onPress={navigateBack} style={{paddingTop:constants.statusBarHeight}} >
            <Feather color={'#666'} size={30} name='chevron-left'></Feather>
          </TouchableOpacity>
        </View>
        <View style={{flex:0.8}}></View>
        <View style={{flex:1,alignItems:'center'}}>
          <View style={styles.dicas}>
            <TouchableOpacity style={[styles.buttonDicas]}>
                <Text style={styles.buttonText}>Dificuldade para respirar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDicas}>
                <Text style={styles.buttonText}>Tosse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDicas}>
                <Text style={styles.buttonText}>Febre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDicas}>
                <Text style={styles.buttonText}>Cansaço</Text>
            </TouchableOpacity>
          </View>
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
    flexDirection:'row',
    
  },
  dicas:{
    //backgroundColor:'#FFCCAA',
    width:'70%',
    height: 270,
    //elevation:4,
    
  },
  buttonDicas:{
    marginTop:5,
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    //borderColor:'black',
    //borderWidth:1,
    justifyContent:'center',
    //borderRadius:5,
    elevation:4,
    borderBottomColor:'#EEE',
    borderBottomWidth:1,
    borderRadius:8
    
  },
  buttonText:{
    alignSelf:'center',
    fontSize:16,
    color:'#9e7be3',
    fontFamily:'sans-serif-light'
  }
})