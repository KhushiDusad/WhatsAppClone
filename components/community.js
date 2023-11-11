import {Image, Text, Button, View, TouchableOpacity} from 'react-native';

const startcommunity=require('./../assets/startcommunity.png')
const next=require('./../assets/next.png')

export default function Community(){
    return<>
        <View>
            <Image source={startcommunity} style={{height:250, width:420, alignSelf:'flex-start'}}/>
            <Text style={{alignSelf:'center', fontSize:23}}>Stay connected with a community</Text>
            <Text style={{alignSelf:'center', fontSize:17, textAlign:'center', padding:10}}>
                Communites bring members together in topic-based groups, and make it 
                easy to get admin announcements. Any community you're added to will appear here.
            </Text>
            <TouchableOpacity>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Text style={{alignSelf:'center', color:'green'}}>See example communities</Text>
                    <Image source={next} style={{height:15, width:15, tintColor:'green', alignSelf:'center'}}/>
                </View>                
            </TouchableOpacity>            
            <TouchableOpacity>
                <View style={{backgroundColor:'#075e54', borderRadius:25, width:300, alignSelf:'center', alignItems:'center', padding:7, margin:10}}>
                    <Text style={{fontSize:15, color:'white'}}>Start your community</Text>
                </View>
            </TouchableOpacity>
        </View>      
    </>
}