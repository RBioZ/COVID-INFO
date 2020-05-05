import React, { useState, useEffect, useDebugValue } from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';


//https://covid19-brazil-api.now.sh/api/report/v1/brazil - brasil 
//https://covid19-brazil-api.now.sh/api/report/v1 - estados
//https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp - estado unico
// https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/SP.png

/*
    "cases": 48335,
    "confirmed": 92865,
    "country": "Brazil",
    "deaths": 6491,
    "recovered": 38039,
    "updated_at": "2020-05-02T21:32:32.000Z"
*/




export default function Info(){

  const navigation = useNavigation();
  const route = useRoute();

  const cases = route.params.cases;
  const confirmed = route.params.confirmed;
  const deaths = route.params.deaths;
  const recovered = route.params.recovered;
  const updated_at = route.params.updated_at;
  const fill = route.params.fill;

  function navigateBack() {
    navigation.goBack();
  }

  return(
    <>
      <View style={styles.viewBack}>
        <TouchableOpacity onPress={navigateBack} style={{paddingTop:constants.statusBarHeight}} >
          <Feather color={'#666'} size={30} name='chevron-left'></Feather>
        </TouchableOpacity>
      </View>
      <View style={styles.view}>

          <Text style={styles.country}>Brasil</Text>
          <AnimatedCircularProgress
            style={styles.circularProgress}
            size={240}
            width={8}
            fill={fill}
            tintColor="#7BE37B"
            onAnimationComplete={() => {}}
            backgroundColor="#BB99FF"
            duration={3000}
            rotation={360}
            lineCap="round"

            //animate={(toVal: number, duration: number, ease: function)}
            >
                {fill => <>
                    <Text style={styles.circularProgressText2}>{Intl.NumberFormat('pt-BR').format(confirmed)}</Text>
                    <Text style={styles.circularProgressText3}>CASOS</Text>
                </>}
          </AnimatedCircularProgress>
          <View style={styles.division}>
            <View style={styles.divisionText}>
              <Text style={[styles.textDescription1,{color:'#7BE37B'}]}>{Intl.NumberFormat('pt-BR').format(recovered)}</Text>
              <Text style={[styles.description,{color:'#7BE37B'}]}>RECUPERADOS</Text>
            </View>
            <View style={styles.divisionText}>
              <Text style={[styles.textDescription1,{color:'#BB99FF'}]}>{Intl.NumberFormat('pt-BR').format(cases)}</Text>
              <Text style={[styles.description,{color:'#BB99FF'}]}>ATIVOS</Text>
            </View>
            <View style={styles.divisionText}>
              <Text style={[styles.textDescription1,{color:'#999'}]}>{Intl.NumberFormat('pt-BR').format(deaths)}</Text>
              <Text style={[styles.description,{color:'#999'}]}>ÓBITOS</Text>
            </View>
            <Text style={{color:'#CCC', position:'absolute',bottom:0,marginBottom:'1%'}}>Atualizado em {updated_at}</Text>
          </View>
                

      </View>
    </>
  );
}


const styles = StyleSheet.create({
  view:{
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'blue'
  },
  circularProgress:{
    //paddingBottom:20,
    
  },
  country:{
    //paddingTop:constants.statusBarHeight+20,
    fontWeight:'bold',
    fontSize:42,
    //backgroundColor:'red',
    paddingBottom:20,
    color:'#666',
  },
  circularProgressText1:{
    color:'#999',
    fontWeight:'bold'
  },
  circularProgressText2:{
    fontSize:28,
    fontWeight:'bold',
    color:'#666'
  },
  circularProgressText3:{
    paddingTop:10,
    fontWeight:'bold',
    color:'#8A67D2'
  },
  viewBack:{
    paddingTop:5,
    flexDirection:'row',
  },
  textDescription1:{
    fontSize:28,
    fontWeight:'bold',
    color:'#8A67D2',
    //backgroundColor:'red',
    //marginLeft:'6%'
  },
  description:{
    fontWeight:'bold',
    fontSize:14,
    color:'#8A67D2'
  },
  division:{
    height:'50%',
    alignItems:'center',
    //justifyContent:'center',
    width:'100%',
    //paddingTop:'10%',
    //backgroundColor:'green',
    //marginTop:'10%',
    //paddingTop:'10%'
  },
  divisionText:{
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'red',
    width:'100%',
    paddingTop:"5%",
    height:'25%',
    //paddingBottom:'10%'
  }
})