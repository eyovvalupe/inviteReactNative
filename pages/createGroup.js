import React from 'react'
import { PButton } from '../component/Button'
import { W } from '../utils/units'
import { Image, StyleSheet, Text, View } from 'react-native'

function CreateGroup({
    navigation
}) {
    const handleClick = () => {
        navigation.navigate('groups')
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/GroupArt.png')}
                style={styles.img}
            />
            <View style={styles.content}>
                <Text style={styles.gro}>Groups</Text>
                <Text style={styles.cont}>Organise friends into groups</Text>
                <PButton handlePress={handleClick} text='Create a group'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
    },
    img: {
        marginTop: 80,
        width: '100%',
        resizeMode: 'contain',
        marginBottom: 10
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50
    },
    gro: {
        fontSize: 40,
        fontWeight: 900,
        marginBottom: 5
    },
    cont: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 50
    }
})

export default CreateGroup