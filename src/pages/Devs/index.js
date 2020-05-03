import React from 'react';
import {StyleSheet,View,Text,ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import constants from 'expo-constants'

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
  }
})