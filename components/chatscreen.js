  import {FlatList, TouchableOpacity, Image, StyleSheet, Text, View, Modal} from 'react-native';
  import Chat from './chat';
  import React from 'react';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  const addchat=require("./../assets/addchat.jpg");
  const back=require("./../assets/back.png");
  const searchicon= require('./../assets/search.png');
  const menuicon= require('./../assets/menu.png'); 

  function MainChats({navigation}){
    const chatData = [
      {
        id: 1,
        name: 'Taylor',
        pfp: require('./../assets/taylorswift.jpg'),
        last_msg: 'Hi! this is a test message. ',
        time:'12:20 PM'
      },
      {
        id: 2,
        name: 'Olivia',
        pfp: require('./../assets/oliviarodrigo.jpg'),
        last_msg: 'Hi! this is a test message. ',
        time: '11:15 AM'
      },
      {
        id: 3,
        name: 'Sabrina',
        pfp: require('./../assets/sabrina.jpg'),
        last_msg: 'Hi! this is a test message. ',
        time: '10:40 AM'
      },
      {
        id: 4,
        name: 'Jennie',
        pfp: require('./../assets/jenniekim.jpg'),
        last_msg: 'Hi! This is a test message. ',
        time: '09:25 AM'
      },
    ];
    return <>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Chat name={item.name} pfp={item.pfp} last_msg={item.last_msg} time={item.time}/>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Select Contacts')}><Image source={addchat} style={[styles.chaticon, {height:60, width:60,}]}/></TouchableOpacity>
    </>
  }

  function AddChats({navigation}) {
    const options=[
      {
        id: 1,
        name: 'New group',
        pfp: require('./../assets/newgrp.jpg'),
        last_msg: 'Create a new group'
      },
      {
        id: 2,
        name: 'New contact',
        pfp: require('./../assets/newchat.jpg'),
        last_msg: 'Add a new contact'
      },
      {
        id: 3,
        name: 'New community',
        pfp: require('./../assets/newcommunity.jpg'),
        last_msg: 'Start a new community'
      },
    ];
    const morechatData = [
      {
        id: 1,
        name: 'User 1',
        pfp: require('./../assets/defaultpic.jpg'),
      },
      {
        id: 2,
        name: 'User 2',
        pfp: require('./../assets/defaultpic.jpg'),
      },
      {
        id: 3,
        name: 'User 3',
        pfp: require('./../assets/defaultpic.jpg'),
      },
      {
        id: 4,
        name: 'User 4',
        pfp: require('./../assets/defaultpic.jpg'),
      },
      {
        id: 5,
        name: 'User 5',
        pfp: require('./../assets/defaultpic.jpg'),
      },
      {
        id: 6,
        name: 'User 6',
        pfp: require('./../assets/defaultpic.jpg'),
      },
    ];
    return <>
      <Modal>
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#075e54', height:60}}>
          <TouchableOpacity onPress={() => navigation.navigate('Your Chats')}>
            <Image source={back} style={{height:25, width:25, padding:10, margin:10, tintColor:'white'}}/>
          </TouchableOpacity>
          <Text style={{fontSize:20, color:'white'}}>Select Contact</Text>
          <View style={{flexDirection:'row', marginLeft:150, alignItems:'center'}}>
            <TouchableOpacity><Image source={searchicon} style={{height:25, width:25, padding:7, margin:7, tintColor:'white'}}/></TouchableOpacity>
            <TouchableOpacity><Image source={menuicon} style={{height:25, width:25, padding:7, margin:7, tintColor:'white'}}/></TouchableOpacity>
          </View>          
        </View> 
        <View>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Chat name={item.name} pfp={item.pfp} last_msg={item.last_msg}/>
            )}
          />
          <Text style={{color: 'gray', fontWeight: '500', fontSize: 15, marginLeft:15}}>Contacts on WhatsApp</Text>
          <FlatList
            data={morechatData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Chat name={item.name} pfp={item.pfp} last_msg="Hey there! I am using WhatsApp."/>
            )}
          />
        </View>        
      </Modal>
    </>
  }

  const Stack = createNativeStackNavigator();

  export default function ChatScreen() {
    return(
      <Stack.Navigator 
        initialRouteName="MainChats"
        screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Screen name='Your Chats' component={MainChats}/>
        <Stack.Screen name='Select Contacts' component={AddChats} />
      </Stack.Navigator>
    );
  }  

  const styles=StyleSheet.create({
    chaticon:{
      padding:25,
      marginBottom:20,
      marginRight: 20,
      alignSelf:'flex-end',
      borderRadius:15,
    },
  })