import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To Do List</Text>
        </View>
    )
}

export default Header