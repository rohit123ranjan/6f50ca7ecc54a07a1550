import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';


const index = ({navigation}) =>{

    const [ country, setCountry] = useState('');
    const [ enable, setEnable ] = useState(false);

    useEffect(()=>{
        setEnable(country === '' ? false : true)
    }
    ,[country])
    
    const onChangeText = (text) =>{
        setCountry(text);
    }
    const _handleSubmit = async() =>{
        console.log("response",country)
        await axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((response)=>{
            navigation.navigate('Details',
            {
                response:response,
                navigation
            })
            setCountry('');
        }).catch((error)=>console.log(error))
    }
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={country}
                placeholder='Enter the country name'
            />
            <TouchableHighlight
            onPress={_handleSubmit}
            disabled={!enable}
            style={styles.button}>
                <Text style={{...styles.text, backgroundColor: !enable ? '#888888' : "#ff3377"}}>
                    Submit
                </Text>
            </TouchableHighlight>
        </View>
    )
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
      width: 200,
      borderWidth: 1,
      padding: 10
  },
  button:{
      width: 100,
      textAlign:'center',
      marginTop: 40,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  text: {
    textAlign:'center',
    color:'#ffffff',
    fontSize:16,
    padding:10,
    fontWeight:'bold'
  }
});
