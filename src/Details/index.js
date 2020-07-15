import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const index = (props) =>{

    const { data } = props?.route?.params?.response?.data;

    const renderItem = () => {
        return(
            <Card>
                <Card.Title title={data?.capital} 
                subtitle={data?.population} />
                <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: data?.flag}} />
                <Card.Actions>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        )
    }

    return(
    <SafeAreaView style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.name}
        />
    </SafeAreaView>
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
});
