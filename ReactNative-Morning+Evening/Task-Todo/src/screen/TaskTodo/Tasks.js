import React,{useState} from 'react';
import Checkbox from 'expo-checkbox';

import {View,Text,StyleSheet,FlatList, TouchableOpacity,Button,Modal, TextInput} from 'react-native'


const Tasks=()=>{
    const [data, setData]=useState([{id:1,title:'Todo-1',active:false}]);
    const [isModalVisible,setIsModalVisible]=useState(false);
    const [title, setTitle]=useState('');

    console.log(data)

    const renderItem=(item,index)=>{
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Checkbox disabled={false} value={item.active} onValueChange={() => setTick(index)}/>
                <Text style={{marginLeft:20}}>{item.title}</Text>
            </View>
        );
      }
    
    const setTick=(index)=>{
        let value=[...data];
        value[index].active=!value[index].active;
        setData(value);
    }

    const startModel=()=>{
            setIsModalVisible(true);
        };
        const saveModel=()=>{
            let val=[...data];
            val.push({id:val.length +1, title: title, active:false});
      setData(val);
        };
    

    return(
        <View style={styles.container}>
          <Text style={styles.title}>What is the task?</Text>
          <FlatList data={data} renderItem={({item,index}) => renderItem(item,index)}/>
          <TouchableOpacity style={styles.btn} onPress={startModel}>
                <Button title='ADD' />
            </TouchableOpacity>
            <Modal transparent={true} visible={isModalVisible}>
            <View >
                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Button style={styles.cancel} title='Cancel' />
                </TouchableOpacity>
            </View>
            <View style={styles.input}>
                <TextInput onChangeText={(text)=> setTitle(text)}
                style={styles.textinput} placeholder="Task name"/>
            <TouchableOpacity>
                <Text style={{textAlign:'center'}} onPress={saveModel}>Save</Text>
            </TouchableOpacity>
            </View>

            </Modal>
        </View>
    );
}
    const styles=StyleSheet.create({
        container:{
            display:'flex',
            flex:1,
        },
        title:{
            textAlign:'center',
            fontFamily:'san-serif',
            fontWeight:24,
            
        },
        btn:{
            alignItems:'center',
        },
        input:{
           marginTop:30,
        },
        textinput:{
               padding:15,
               backgroundColor:'whitesmoke',
        }
    });

export default Tasks;
