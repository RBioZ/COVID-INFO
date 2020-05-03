import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, ImageBackground,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

//Imports Icons

//onPress={() => navigateToDetail(Dicas)}


import icon_1 from '../../../assets/svg/frame1.png';
import icon_2 from '../../../assets/svg/frame2.png';
import icon_3 from '../../../assets/svg/frame3.png';
import icon_4 from '../../../assets/svg/frame4.png';



export default function Menu(){

  const navigation = useNavigation();
  const [cases,setCases] = useState(0);
  const [confirmed,setConfirmed] = useState(0);
  const [deaths,setDeaths] = useState(0);
  const [recovered,setRecovered] = useState(0);
  const [updated_at,setUpdated_at] = useState('');
  const [fill,setFill] = useState(0);

  //NAVIGATE

  function navigateToDicas(data) {
    navigation.navigate('Dicas', { data });
  }

  function navigateToInfo(fill) {
    navigation.navigate('Info', {cases,confirmed,deaths,recovered,updated_at,fill});
  }

  function navigateToSintomas(data) {
    navigation.navigate('Sintomas', { data });
  }

  function navigateToTeste(data) {
    navigation.navigate('Teste', { data });
  }
  function navigateToDevs(data) {
    navigation.navigate('Devs', { data });
  }

  async function loadInfo(){
    const res = await api.get('brazil')

    const info = res.data

    setCases(info.data.cases)
    setConfirmed(info.data.confirmed)
    setDeaths(info.data.deaths)
    setRecovered(info.data.recovered)
    setUpdated_at(info.data.updated_at)
    setFill((cases/confirmed) * 100)
  }

  useEffect(() => {
    loadInfo();
  },[])

  return(
        <ImageBackground style={styles.background} source={require('../../../assets/background.png')}>
                <View style={styles.viewButton}></View>
                <View style={styles.rowButton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigateToDicas(0)}>
                        <Image style={styles.iconsButton} source={icon_1} />
                        <Text style={styles.textButton}>Dicas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigateToSintomas(0)}>
                        <Image style={styles.iconsButton} source={icon_2} />
                        <Text style={styles.textButton}>Sintomas</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowButton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigateToTeste(0)}>
                        <Image style={styles.iconsButton} source={icon_3} />
                        <Text style={styles.textButton}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigateToInfo((cases/confirmed) * 100)}>
                        <Image style={styles.iconsButton} source={icon_4} />
                        <Text style={styles.textButton}>Estatística</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={() => navigateToDevs(0)}>
                    <Text style={styles.developers}>DESENVOLVEDORES</Text>
                </TouchableOpacity>
        </ImageBackground>
  );
}


const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewButton:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:'15%',
        backgroundColor:'#000'
    },
    rowButton:{
        //flex:1,
        width:'80%',
        //backgroundColor:'#FFDD00',
        marginTop: 15,
        //alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignSelf:'center'
    },
    button:{
        //flex:1,
        width:'48%',
        height:170,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'flex-end',
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        textShadowOffset:{
            width:4,
            height:4,
        },
        elevation:4,
    },
    textButton:{
        fontWeight:'bold',
        fontSize:16,
        paddingBottom:20,
    },
    developers:{
        fontSize:16,
        paddingTop:50,
        color:'#888888',
        fontWeight:"normal",
    },
    iconsButton:{
        width:"55%",
        height:"50%",
    }
  });
  