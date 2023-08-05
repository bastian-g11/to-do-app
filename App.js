/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Header, ToDoItem, Form} from './src/Components';

const App: () => React$Node = () => {
  const toDos = [
    {text: 'Stuff 1', key: '1'},
    {text: 'Stuff 2', key: '2'},
    {text: 'Stuff 3', key: '3'},
  ];

  const [todos, setToDos] = useState(toDos);

  const pressHandler = (key) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length < 3) {
      Alert.alert('Invalid To Do Item', 'To Do item must be over 3 chars', [
        {text: 'Understood', onPress: () => console.log('Alert, closed')},
      ]);
      return;
    }

    setToDos((prevToDos) => {
      return [{text: text, key: Math.random().toString()}, ...prevToDos];
    });
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <Form submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <ToDoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
    // backgroundColor: "pink",
    flex:1,
  },
  list: {
    marginTop: 10,
    flex: 1,
    // backgroundColor: "red",
  }
});

export default App;
