import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function Avatar({
    imageUrl,
    addStyle
}) {
  return (
    <TouchableOpacity style={[styles.tabGround, addStyle]}>
        <Image
          style={styles.logo}
          source={{uri: imageUrl}}
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabGround: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 16,
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default Avatar;
