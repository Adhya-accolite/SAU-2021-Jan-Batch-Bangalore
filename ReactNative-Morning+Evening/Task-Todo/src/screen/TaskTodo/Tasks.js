import React,{useState} from 'react';

import {View,  Checkbox,Text,StyleSheet,FlatList, TouchableOpacity,Button,Modal, TextInput} from 'react-native'


export const Tasks=()=>{
    const [data, setData]=useState([{id:1,title:'Todo-1',active:false}]);
   
    const [isModalVisible,setIsModalVisible]=useState(false);
    const [title, setTitle]=useState('');
    const renderItem=({item,index})=>{
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Checkbox disabled={false} value={item.active}

            onValueChange={(temp)=>setTick(temp,index)}/>
                <Text style={{marginLeft:20}}>{item.title}</Text>
            </View>
        );
        }
    const startModel=()=>{
        setIsModalVisible(true);
    };
    const saveModel=()=>{
        let val=[...data];
        val.push({id:val.length +1, title: title, active:false});
   setData(val);
    };
    const setTick=(tem,index)=>{
        let value=[...data];
        value[index].active=!value[index].active;
        setData(value);
    }
    return(
        <View style={styles.container}>
<Text style={styles.title}>What is the task?</Text>
            <FlatList data={data} renderItem={renderItem}/>
            <TouchableOpacity style={styles.btn} onPress={ startModel}>
                <Button>ADD</Button>
            </TouchableOpacity>
            <Modal transparent={true} visible={isModalVisible}>
            <View >
                <TouchableOpacity onPress={setIsModalVisible(false)}>
                <Button style={styles.cancel}>Cancel</Button>
                </TouchableOpacity>
            </View>
            <View style={styles.input}>
                <TextInput onChangeText={(text)=> setTitle(text)}
                style={styles.textinput} placeholder="Task name"/>
            <TouchableOpacity>
                <Text style={{textAlign:'center'}} onPress={ saveModel}>Save</Text>
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

