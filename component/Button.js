import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const PButton = ({handlePress, text}) => {
    return (
        <TouchableOpacity style={styles.btnN} onPress={handlePress}>
            <Text style={styles.btnT}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    btnN: {
        backgroundColor: 'pink',
        width: '100%',
        padding: 10,
        textAlign: 'center',
        borderWidth: 3,
        borderRadius: 5,
        shadowOffset: {
        width: 5,
        height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        fontSize: 18,
        fontWeight: 900,
        marginBottom: 20
    },
    btnT: {
        textAlign: 'center',
        fontWeight: 900
    }
})
