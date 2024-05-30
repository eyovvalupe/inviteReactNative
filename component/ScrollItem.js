import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Avatar from "./avatar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function ScrollItem() {
  return (
    <View style={styles.scrollItem}>
      <View style={styles.avatar}>
        <Avatar imageUrl="../assets/images/avt6.png" />
      </View>
      <View style={styles.con}>
        <TouchableOpacity>
          <Text style={styles.title}>Sunday beers</Text>
          <View style={styles.flex}>
            <Ionicons
              style={{ marginRight: 10, color: "purple" }}
              name="timer-outline"
              size={20}
              color="black"
            />
            <Text style={{ color: "purple" }}>Now</Text>
          </View>
          <View style={styles.flex}>
            <FontAwesome5
              style={{ marginRight: 10, color: "grey" }}
              name="user-friends"
              size={16}
              color="black"
            />
            <Text style={styles.group}>All frineds</Text>
          </View>
          <View style={styles.flex}>
            <FontAwesome
              style={{ marginRight: 10, color: "grey" }}
              name="location-arrow"
              size={16}
              color="black"
            />
            <Text style={styles.location}>
              Las uns fruendi bleiben, Torstra
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
  },
  avatar: {
    marginRight: 20,
  },
  con: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 900,
    marginBottom: 5,
  },
  time: {
    fontSize: 15,
    color: "purple",
    marginBottom: 5,
  },
  group: {
    color: "#333",
  },
  location: {
    color: "#333",
  },
  btn: {
    width: 60,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: 700,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default ScrollItem;
