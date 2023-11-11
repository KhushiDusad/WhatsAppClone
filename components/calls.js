import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Calls = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.pic} style={styles.avatar} />
      <TouchableOpacity>
        <View style={styles.chatInfo}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.callinfo}>
                <Image source={props.callicon} style={styles.callicon}/>
                <Text style={styles.time}>{props.time}</Text>
            </View>
        </View>     
      </TouchableOpacity>
      <TouchableOpacity><Image source={props.calltype} style={styles.calltype} /></TouchableOpacity>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    height:80,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '500'
  },
  time: {
    fontSize: 14,
    color: 'gray',
  },
  calltype: {
    width: 35,
    height: 35,
    marginLeft:150,
    alignItems:'flex-end',
    tintColor:'#075e54'
  },
  callicon:{
    height:15,
    width:15,
    tintColor:'gray'
  },
  callinfo:{
    flexDirection:'row', 
  },
});

export default Calls;
