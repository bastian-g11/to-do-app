import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles'


const ToDoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default ToDoItem;
