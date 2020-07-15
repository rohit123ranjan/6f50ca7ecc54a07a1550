import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import ModalComponent from '../../component/ModalComponent';
import {SvgUri} from 'react-native-svg';
import axios from 'axios';

const index = (props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const data = props?.route?.params?.response?.data;
    // console.log("props",props?.route?.params?.response?.data)
    // console.log("props",data)

    const _handleWeather = async(capital) =>{
        await axios.get(`http://api.weatherstack.com/current?access_key=47170e4b5da3f797ab2858d3b50384fb&query="${capital}"`)
        .then((response)=>{
            setWeatherData(response?.data)
            setModalVisible(true);
        }).catch((error)=>console.log(error))
    }
    const renderItem = (item) => {
        console.log("props item",item?.flag)
        return(
            <Card>
                <Card.Title title={`Capital: ${item?.capital}`} 
                subtitle={`population: ${item?.population}`} />
                <Card.Content>
                <Title>Lat Lang</Title>
                {item?.latlng?.map((value,index)=>(
                    <Text key={index}>{value}</Text>
                ))}

                </Card.Content>
                <SvgUri
                    width="100%"
                    height="200"
                    uri={item?.flag}
                />
                <Card.Actions>
                    <Button 
                    onPress={()=>_handleWeather(item?.capital)}>
                        Capital Weather</Button>
                </Card.Actions>
            </Card>
        )
    }

    return(
    <SafeAreaView style={styles.container}>
        <ModalComponent 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        weatherData={weatherData}/>
        <FlatList
            data={data}
            renderItem={(item)=>renderItem(item.item)}
            keyExtractor={item => item.item?.numericCode}
        />
    </SafeAreaView>
    )
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
