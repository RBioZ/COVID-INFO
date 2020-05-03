import React from 'react';
import {StyleSheet,View,Text,ImageBackground} from 'react-native';


export default function Devs(){
  return(
      <View style={styles.background}>
          <Text style={styles.soon} >EM BREVE!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  soon:{
    fontSize:32,
    //fontWeight:'bold',
    color:'#9e7be3',
    fontFamily:'sans-serif-light'
  }
})