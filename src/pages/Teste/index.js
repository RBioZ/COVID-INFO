import React,{useEffect,useState} from 'react';
import { ImageBackground, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import api from '../../services/api';
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';

function Item({uf,cases,deaths}) {

  return (
      <View style={styles.item}>
        <Image style={[styles.image,{marginLeft:'1%'}]} source={{uri:`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`}}></Image>
        <Text style={[styles.title,{marginLeft:'1%',width:'10%', color:'#888888'}]}>{uf}</Text>
        <View style={styles.numberView}>
          <Text style={[styles.numberInfo]}>{Intl.NumberFormat('pt-BR').format(cases)}</Text>
          <Text style={[styles.numberInfo]}>{Intl.NumberFormat('pt-BR').format(deaths)}</Text>
        </View>
      </View>
  );
}

export default function App() {

  const [data,setData] = useState([])
  const navigation = useNavigation();
  
  function navigateBack() {
    navigation.goBack();
  }

  async function loadInfo(){
    const res = await api.get('https://covid19-brazil-api.now.sh/api/report/v1')

    setData(res.data.data);

  }

  async function InterstialAd(){
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }

  useEffect(() => {

    async function loadAd(){
      AdMobInterstitial.setAdUnitID('ca-app-pub-2415885204681618/4046581980'); // Test ID, Replace with your-admob-unit-id
      InterstialAd();
    }
    loadAd();
    loadInfo();
  },[])

  return (
    
    <ImageBackground source={require('../../../assets/background-5.png')} style={styles.container}>
          <TouchableOpacity onPress={navigateBack} style={{paddingTop:Constants.statusBarHeight,position:'absolute',zIndex:5,top:5,left:1}} >
            <Feather color={'#666'} size={30} name='chevron-left'></Feather>
          </TouchableOpacity>
      <View style={styles.indiceText}>
        <Text style={[styles.text,{marginLeft:'33%',width:'1%'}]}>
          CASOS
        </Text>
        <Text style={styles.text}>
          ÓBITOS
        </Text>
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          style={styles.flatlist}
          data={data}
          renderItem={({ item }) => <Item uf={item.uf} deaths={item.deaths} cases={item.cases} />}
          keyExtractor={item => item.uf}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  item: {
    backgroundColor: "#F0F0F0",
    marginHorizontal:"1%",
    flexDirection:'row',
    alignItems:'center',
    marginTop:'1%',
    height:40,
    borderRadius:5
  },
  title: {
    fontSize: 18,
    color:'#414141',

    fontWeight:'bold'
  },
  flatlist:{
    backgroundColor:'#FFF'
  },
  flatlistView:{
    height:'80%',
    width:'95%'
  },
  indiceText:{
    flexDirection:'row',
    width:'95%',
  },
  text:{
    fontSize:18,
    marginLeft:'12%',
    color:'#8A67D2',
    fontFamily:'sans-serif-light',
    width:'10%',
    textAlign:'center',
  },
  image:{
    width:30,
    height:17,
    alignSelf:'center',
  },
  imageDiv:{
    justifyContent:'center',
    alignItems:'center'
  },
  numberView:{
    flex:1,
    flexDirection:'row',
    marginRight:'1%'
  },
  numberInfo:{
    marginLeft:'16%',
    width:'15%',
    textAlign:'center',
    color:'#888888'
  },
});
