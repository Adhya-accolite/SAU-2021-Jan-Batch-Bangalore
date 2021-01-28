import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Modal,
  TextInput,
} from 'react-native';

const Tasks = () => {
  const [data, setData] = useState([{ id: 1, title: 'JavaScript', active: false }]);
  const [isTextVisible, setTextVisible] = useState(false);
  const [title, setTitle] = useState('');

  console.log(data);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          disabled={false}
          value={item.active}
          onValueChange={(temp) => setTick(temp, index)}/>
        <Text
          style={[
            styles.titlestyle,
            { textDecorationLine: item.active ? 'line-through' : 'none' }
          ]}>
          {item.title}
        </Text>
      </View>
    );
  };

  const setTick = (value, index) => {
    let val = [...data];
    val[index].active = !val[index].active;
    setData(val);
  };
 const saveModel=()=>{
             setTextVisible(true);
            let val=[...data];
            val.push({id:val.length +1, title: title, active:false});
      setData(val);
        };
    
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is the task?</Text>
      <FlatList data={data} renderItem={renderItem} />

      <Modal transparent={true} visible={isTextVisible}>
       
          <View style={styles.inputWrapper}>
            <TextInput
              onChangeText={(text) => setTitle(text)}
              style={styles.textinput}
              placeholder="Task name"/>
            <TouchableOpacity style={styles.addBtnWrapper} onPress={saveModel}>
                <Text style={styles.addtext} >ADD</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'san-serif',
    fontSize: 26,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  addBtnWrapper: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 5,
  },
  inputWrapper: {
    marginTop: 15,
  },
  textinput: {
    padding: 10,
    backgroundColor: 'whitesmoke',
  },

  titlestyle: {
    marginLeft: 15,
    fontSize: 18,
  },
  addtext:{
          textAlign:'center',
          backgroundColor:'skyblue',
          textDecorationColor:'white',
          height: 30,
           padding: 8,
         

  },
});

export default Tasks;



