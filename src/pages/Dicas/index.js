import React from 'react';
import {StyleSheet,View,Text,ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import constants from 'expo-constants';
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';

export default function Dicas(){

  const navigation = useNavigation();
  
  function navigateBack() {
    navigation.goBack();
  }

  return(
      <ImageBackground style={styles.background} source={require('../../../assets/background-3.png')}>
        <View style={styles.viewBack}>
          <TouchableOpacity onPress={navigateBack} style={{paddingTop:constants.statusBarHeight}} >
            <Feather color={'#666'} size={30} name='chevron-left'></Feather>
          </TouchableOpacity>
        </View>
        <View style={{flex:0.3,alignItems:'center'}}></View>
        <View style={{flex:1,alignItems:'center'}}>
          <View style={styles.dicas}>
            <View style={{flex:1,alignItems:'center',backgroundColor:'#FFFFFF',elevation:4, borderRadius:10}}>
            <TouchableOpacity style={[styles.buttonDicas]}>
                <View style={styles.viewText1}>
                <Text style={styles.buttonText1}>1.</Text>
                </View>
                <View style={styles.viewText2}>
                  <Text style={styles.buttonText2}>Mãos</Text>
                  <Text style={styles.buttonText3}>Dificuldade para respirar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonDicas]}>
                <View style={styles.viewText1}>
                <Text style={styles.buttonText1}>2.</Text>
                </View>
                <View style={styles.viewText2}>
                  <Text style={styles.buttonText2}>Cotovelo</Text>
                  <Text style={styles.buttonText3}>Usar para cobrir a tosse</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonDicas]}>
                <View style={styles.viewText1}>
                <Text style={styles.buttonText1}>3.</Text>
                </View>
                <View style={styles.viewText2}>
                  <Text style={styles.buttonText2}>Rosto</Text>
                  <Text style={styles.buttonText3}>Evitar tocar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonDicas]}>
                <View style={styles.viewText1}>
                <Text style={styles.buttonText1}>4.</Text>
                </View>
                <View style={styles.viewText2}>
                  <Text style={styles.buttonText2}>Espaço</Text>
                  <Text style={styles.buttonText3}>Manter distância segura</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonDicas]}>
                <View style={styles.viewText1}>
                <Text style={styles.buttonText1}>3.</Text>
                </View>
                <View style={styles.viewText2}>
                  <Text style={styles.buttonText2}>Casa</Text>
                  <Text style={styles.buttonText3}>Não sair, se possível</Text>
                </View>
            </TouchableOpacity>
            </View>
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
    //backgroundColor:'#FFFFFF',
    width:'80%',
    height:'100%',
    //elevation:4,
    paddingBottom:'20%'
    
  },
  buttonDicas:{
    //marginTop:5,
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    //borderColor:'black',
    //borderWidth:1,
    justifyContent:'center',
    //borderRadius:5,
    //elevation:4,
    //borderBottomColor:'#EEE',
    //borderBottomWidth:1,
    borderRadius:10
    
  },
  buttonText1:{
    alignSelf:'center',
    fontSize:22,
    color:'#BBB',
    //fontFamily:'sans-serif-light'
    fontWeight:'bold',
    paddingLeft:10
  },
  buttonText2:{
    //alignSelf:'center',
    fontSize:16,
    color:'#9e7be3',
    fontWeight:'bold',
    //fontFamily:'sans-serif-light'
    paddingLeft:10
  },
  buttonText3:{
    //alignSelf:'center',
    fontSize:16,
    color:'#999',
    fontFamily:'sans-serif-light',
    fontWeight:'bold',
    paddingLeft:10
  },
  viewText1:{
    //backgroundColor:'red',
    width:'10%',
    justifyContent:'center',
    paddingBottom:10
  },
  viewText2:{
    //backgroundColor:'blue',
    width:'90%',
    justifyContent:'center',
  }
})