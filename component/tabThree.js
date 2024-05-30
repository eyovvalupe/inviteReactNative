import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Avatar from "./avatar";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function Third() {
  return (
    <View style={styles.container}>
      <Text style={styles.profile}>Profile</Text>
      <View style={styles.info}>
        <View style={styles.person}>
          <Avatar
            addStyle={styles.avatar}
            imageUrl="../assets/images/avt6.png"
          />
          <Text style={styles.name}>Ann Carder</Text>
        </View>
        <View>
          <View style={styles.iconDiv}>
            <View style={styles.icon}><MaterialIcons name="alternate-email" size={20} color="black" /></View>
            <View>
              <Text style={styles.notification}>Username</Text>
              <Text style={styles.pinfo}>somethinghere</Text>
            </View>
          </View>
          <View style={[styles.iconDiv, styles.addMargin]}>
            <View style={styles.icon}><FontAwesome name="phone" size={20} color="black" /></View>
            <View>
              <Text style={styles.notification}>Phone</Text>
              <Text style={styles.pinfo}>+49 8374 7342 77</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.iconDiv, styles.addMargin2]}>
            <View style={styles.icon}><Fontisto name="bell-alt" size={20} color="black" /></View>
            <View>
              <Text style={styles.pinfo}>Invite frineds</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconDiv}>
            <View style={styles.icon}><Entypo name="log-out" size={20} color="black" /></View>
            <View>
              <Text style={styles.pinfo}>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profile: {
    fontSize: 30,
    fontWeight: 900,
    marginBottom: 40
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 35,
    marginRight: 20
  },
  info: {
    display: "flex",
  },
  person: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40
  },
  name: {
    fontSize: 35,
    fontWeight: 900,
    flex: 1
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  addMargin: {
    marginBottom: 40
  },
  addMargin2: {
    marginBottom: 50
  },
  icon: {
    marginRight: 20
  },
  notification: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 5
  },
  pinfo: {
    fontSize: 15,
    fontWeight: 500
  }
});

export default Third;
