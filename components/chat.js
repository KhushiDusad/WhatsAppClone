import {React, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const back=require("./../assets/back2.png");

const Chat = (props) => {
  const [showImageModal, setShowImageModal] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setShowImageModal(true)}><Image source={props.pfp} style={styles.avatar} /></TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.chatInfo}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.lastMessage}>{props.last_msg}</Text>
      </View>
      </TouchableOpacity>
      <Text style={styles.time}>{props.time}</Text>
      <Modal visible={showImageModal} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setShowImageModal(false)}>
              <View style={styles.pfpheader}>
                <Image source={back} style={styles.pfpback}/>
                <Text style={styles.pfpname}>{props.name}</Text>
              </View>
          </TouchableOpacity>          
          <Image source={props.pfp} style={styles.enlargedImage} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex:1,
    width:420,
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
    fontWeight:'500'
  },
  lastMessage: {
    fontSize: 14,
    color: 'gray',
  },
  time:{
    fontSize:12,
    color:'gray',
    fontWeight:'600',
    marginLeft:115,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  pfpheader:{
    width:300,
    flexDirection:'row',
    backgroundColor:'black',
    alignItems:'center',
    paddingHorizontal:10
  },
  pfpback:{
    width:15,
    height:15,
    tintColor:'white',
    marginRight:10,
  },
  pfpname:{
    fontSize:20,
    color:'white'
  },
  enlargedImage: {
    width: 300,
    height: 300,
  }, 
});

export default Chat;