import { StyleSheet,  Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import {React, useState} from 'react';
import {NavigationContainer, navigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from './components/chatscreen';
import StatusScreen from './components/statusscreen';
import CallScreen from './components/callscreen';

const cameraicon= require('./assets/camera.png');
const searchicon= require('./assets/search.png');
const menuicon= require('./assets/menu.png');

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={design.container}>
      <View style={design.header}>
        <View style={design.heading}>
          <Text style={design.headerText}>WhatsApp</Text>
          <View style={design.icons}>
            <TouchableOpacity><Image source={cameraicon} style={design.headericon}/></TouchableOpacity>
            <TouchableOpacity><Image source={searchicon} style={design.headericon}/></TouchableOpacity>
            <TouchableOpacity><Image source={menuicon} style={design.headericon}/></TouchableOpacity>
          </View>
        </View>   
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            "tabBarActiveTintColor": "white",
            "tabBarInactiveTintColor": "#85a19e",
            "tabBarLabelStyle": {
              "fontSize": 16,
              "fontWeight": "bold"
            },
            "tabBarItemStyle": {
              "padding": 0
            },
            "tabBarIndicatorStyle": {
              "height": 4,
              "backgroundColor": "white"
            },  
            "tabBarStyle": {
              "backgroundColor": "#075e54",
              "height": 50
            }
          }}
        >
          <Tab.Screen
            name="CHATS"
            component={ChatScreen}
            options={{tabBarLabel: 'CHATS'}}
          />
          <Tab.Screen
            name="STATUS"
            component={StatusScreen}
            options={{tabBarLabel: 'STATUS'}}
          />
          <Tab.Screen
            name="CALLS"
            component={CallScreen}
            options={{tabBarLabel: 'CALLS'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
const design=StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'#fff' 
  },
  heading:{
    flexDirection:'row',
    alignItems:'center',
  },
  header:{
    height:85,
    width:420,
    backgroundColor:'#075e54'
  },
  headerText:{
    fontSize:30,
    color:'white',
    paddingLeft:10,
    paddingTop:30,
  },
  icons:{
    marginLeft:150,
    flexDirection:'row',
    alignSelf:'auto',
  },
  headericon:{
    marginTop:35,
    height:30,
    width:30,
    tintColor:'white',
    marginHorizontal:3,
  },
})