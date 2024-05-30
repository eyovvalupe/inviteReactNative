import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import ScrollItem from "./ScrollItem";
import RBSheet from "react-native-raw-bottom-sheet";
import { H } from "../utils/units";
import { Entypo } from "@expo/vector-icons";
import InviteFriendToGroup from "./InviteFriendToGroup";

function First() {
  const dropBoard = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.btnDiv}>
        <Text style={styles.text}>Drops</Text>
        <TouchableOpacity
          onPress={() => dropBoard.current.open()}
          style={styles.tabGround}
        >
          <Image
            style={styles.logo}
            source={require("../assets/images/plus.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ScrollItem />
        <ScrollItem />
        <ScrollItem />
      </ScrollView>
      <RBSheet
        ref={dropBoard}
        height={0.7 * H}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "white",
          },
        }}
      >
        <View style={styles.bottomSheetContent}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: 40
            }}
            onPress={() => dropBoard.current.close()}
          >
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Close friends</Text>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <InviteFriendToGroup />
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  btnDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabGround: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 30,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,
    fontWeight: 800,
  },
  bottomSheetContent: {
    height: 0.7 * H,
    alignItems: "center",
  },
});

export default First;
