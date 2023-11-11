import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Status = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.update} style={styles.avatar} />
      <TouchableOpacity>
        <View style={styles.chatInfo}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.time}>{props.time}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '500'
  },
  time: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Status;