import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const index = (props) =>{
  const weather = props.weatherData?.current
    return(
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={() => {
            props.setModalVisible(!props.modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Card style={{width:300}}>
                  <Card.Title title={`Temperature: ${weather?.temperature}`} 
                  subtitle={`Wind Speed: ${weather?.wind_speed}`} />
                  <Card.Content>
                  <Paragraph>{`precip: ${weather?.precip}`} </Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: weather?.weather_icons[0]}} />
                  <Card.Actions>
                    <TouchableHighlight
                    underlayColor='rgba(73,182,77,1,0.9)'
                    onPress={()=>props.setModalVisible(!props.modalVisible)}
                    style={styles.button}>
                        <Text style={{...styles.text, backgroundColor:"#ff3377"}}>
                            Close
                        </Text>
                    </TouchableHighlight>
                  </Card.Actions>
              </Card>
            </View>
          </View>
        </Modal>
      </View>
    )
}

export default index;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#efefef",
    borderRadius: 4,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
