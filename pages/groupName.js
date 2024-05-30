import { PButton } from '../component/Button'
import { W } from '../utils/units'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

function GroupName({
    navigation
}) {
    const [gname, setGname] = useState('')

    const handleclick = () => {
        navigation.navigate('tabone')
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
                <Text style={styles.label}>Group name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g.daily catchups, works, drinks, etc"
                    value={gname}
                    onChangeText={text => setGname(text)}
                    placeholderTextColor={'#999'}
                />
                <PButton handlePress={handleclick} text='Add friends'/>
                <Text style={styles.desc}>We need to access to your contacts to add friends in this circle</Text>
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
        marginTop: -250,
        width: '100%',
        resizeMode: 'contain',
        marginBottom: 50
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
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginBottom: 20,
        paddingHorizontal: 15,
        fontSize: 15,
        letterSpacing: 1.5,
        fontWeight: 500
      },
      label: {
        fontSize:18,
        fontWeight: 700,
        marginBottom: 10
      },
      desc: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 700,
      },
})

export default GroupName