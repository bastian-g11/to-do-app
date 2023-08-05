import React, { useState } from 'react'
import {View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

const Form = ({submitHandler}) => {
    
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="New To Do ..."
            onChangeText={changeHandler}/>

            <Button onPress={() => submitHandler(text)} title="Add To Do" color="coral"/>
        </View>
    )
}

export default Form
