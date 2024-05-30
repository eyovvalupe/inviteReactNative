import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { PButton } from '../component/Button';

const Login = ({
  navigation
}) => {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState(0); // Default to US country code


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      // Ensure that the 'uri' property exists before setting the avatar
      if (result.assets[0].uri) {
        setAvatar(result.assets[0].uri);
      } else {
        console.error("Image URI is missing in result:", result);
      }
    } else {
      console.log("Image selection cancelled");
    }
  };
  

  const handleNext = () => {
    navigation.navigate('createGroup')
  };

  return (
    <View style={styles.container}>
    <Text
        style={styles.pro1}
    >Your Profile</Text>
    <Text
        style={styles.pro2}
    >So that your friends identify you</Text>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.avatarContainer}>
          {avatar ? <Image source={{ uri: avatar }} style={styles.avatar} /> : <Image source={require('../assets/images/PhotoUpload.png')}/>}
        </View>
      </TouchableOpacity>
      <Text style={styles.fullname}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First & Last name"
        value={fullName}
        onChangeText={text => setFullName(text)}
        placeholderTextColor={'#999'}
      />
      <Text style={styles.phone}>Phone number</Text>
      <View style={styles.phoneP}>
      <View style={styles.pickerContainer}>
        <Picker
        selectedValue={selectedCountryCode}
        style={styles.picker}
        onValueChange={(itemValue, index) => {
            console.log(itemValue)
            setSelectedCountryCode(itemValue)
        }}
        >
        <Picker.Item label="+1" value="US"/>
        <Picker.Item label="+1" value="CA"/>
        <Picker.Item label="+44" value="UK"/>
        <Picker.Item label="+61" value="GE"/>
        <Picker.Item label="+91" value="IN"/>
        {/* Add more countries as needed */}
        </Picker>
        </View>
        <TextInput
            style={styles.inputp}
            placeholder="10 digit mobile number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="phone-pad"
            placeholderTextColor={'#999'}
        />
      </View>
      <PButton handlePress={handleNext} text="Next"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 15,
    letterSpacing: 1.5,
    fontWeight: 500,
    fontSize: 15
  },
  inputp: {
    width: '80%',
    height: 40,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 15,
    // color: '#888',
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: 500
  },
  avatarContainer: {
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  pro1: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 5
  },
  pro2: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 20
  },
  fullname: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 10
  },
  phone: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 10
  },
  picker: {
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    width: '100%',
    borderColor: 'black'
  },
  pickerContainer: {
    width: '18%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  phoneP: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 20
  },
});


export default Login;
