import {FlatList, View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Calls from './calls';
import React from 'react';
const calllink=require('./../assets/link.jpg');
const addcall=require("./../assets/addcall.jpg");

export default function StatusScreen() {
  const callData = [
    {
      id: 1,
      name: 'Taylor',
      pic: require('./../assets/taylorswift.jpg'),
      callicon:require('./../assets/incoming-call.png'),
      calltype: require('./../assets/audio-call.png'),
      time: ' Yesterday, 1:25 PM '
    },
    {
      id: 2,
      name: 'Olivia',
      pic: require('./../assets/oliviarodrigo.jpg'),
      callicon:require('./../assets/missed-call.png'),
      calltype: require('./../assets/audio-call.png'),
      time: ' Thursday, 12:00 PM'
    },
    {
      id: 3,
      name: 'Sabrina',
      pic: require('./../assets/sabrina.jpg'),
      callicon:require('./../assets/incoming-call.png'),
      calltype: require('./../assets/audio-call.png'),
      time: ' Tuesday, 11:00 AM  '
    },
    {
      id: 4,
      name: 'Jennie',
      pic: require('./../assets/jenniekim.jpg'),
      callicon:require('./../assets/incoming-call.png'),
      calltype: require('./../assets/audio-call.png'),
      time: ' Monday, 08:50 AM  '
    },
  ];
  return <>
    <View style={{height:80}}>
      <Calls name='Create call link' pic={calllink} time='Share a link for your WhatsApp call' />
    </View>
    <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15, marginLeft:10}}>Recent</Text>
    <FlatList
      data={callData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Calls name={item.name} pic={item.pic} time={item.time} callicon={item.callicon} calltype={item.calltype}/>
      )}
    />
    <TouchableOpacity><Image source={addcall} style={[styles.callicon, {height:60, width:60}]}/></TouchableOpacity>
  </>
}  

const styles=StyleSheet.create({
  callicon:{
    padding:25,
    marginBottom:25,
    marginRight: 25,
    alignSelf:'flex-end',
    borderRadius:15,
  },
})