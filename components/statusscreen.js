import {FlatList, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Status from './status';
import React from 'react';
const mystatus=require("./../assets/catstatus.jpg");
const addstatus=require("./../assets/addstatus.jpg");
const pencil=require("./../assets/statuspencil.jpg");

export default function StatusScreen() {
  const viewedStatusData = [
    {
      id: 1,
      name: 'Taylor',
      update: require('./../assets/tsstatus.jpg'),
      time: 'just now'
    },
    {
      id: 2,
      name: 'Olivia',
      update: require('./../assets/orstatus.jpg'),
      time: '1 hour ago'
    },
    {
      id: 3,
      name: 'Sabrina',
      update: require('./../assets/scstatus.jpg'),
      time: '8 hours ago'
    },
    {
      id: 4,
      name: 'Jennie',
      update: require('./../assets/jkstatus.jpg'),
      time: 'Yesterday'
    },
  ];
  return <>
    <Status name='My Status' update={mystatus} time='Today, 3:25 PM'/>
    <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15, marginLeft:10}}>Recent Updates</Text>
    <FlatList
      data={viewedStatusData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Status name={item.name} update={item.update} time={item.time} />
      )}
    />
    <TouchableOpacity><Image source={pencil} style={[styles.statusicon, {height:40, width:40}]}/></TouchableOpacity>
    <TouchableOpacity><Image source={addstatus} style={[styles.statusicon, {height:60, width:60,}]}/></TouchableOpacity>
  </>
}  

const styles=StyleSheet.create({
  statusicon:{
    padding:25,
    marginBottom:20,
    marginRight: 20,
    alignSelf:'flex-end',
    borderRadius:15,
  },
})