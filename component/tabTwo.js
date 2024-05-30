import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Avatar from "./avatar";
import RBSheet from "react-native-raw-bottom-sheet";
import { H } from "../utils/units";
import { Entypo } from "@expo/vector-icons";
import InviteFriendToGroup from "./InviteFriendToGroup";

// Sample data for friends list
const friendsData = [
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1234567890",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "+9876543210",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1234567890",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "+9876543210",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1234567890",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "+9876543210",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1234567890",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "+9876543210",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1234567890",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "+9876543210",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1234567890",
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "+9876543210",
    avatar: require("../assets/images/avt6.png"),
  },
  // Add more friends data as needed
];

// Sample data for group list
const groupData = [
  {
    id: 1,
    name: "Group 1",
    memberCount: 5,
    avatar: require("../assets/images/avt6.png"),
  },
  {
    id: 2,
    name: "Group 2",
    memberCount: 3,
    avatar: require("../assets/images/avt6.png"),
  },
  // Add more group data as needed
];

const MyComponent = () => {
  const groupDrop = useRef()
  const [showFriends, setShowFriends] = useState(true);
  const [showGroups, setShowGroups] = useState(false);

  const handleFirstClick = () => {
    setShowFriends(true);
    setShowGroups(false);
  };

  const handleSecondClick = () => {
    setShowFriends(false);
    setShowGroups(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            showFriends && styles.activeButton,
            styles.friend,
          ]}
          onPress={handleFirstClick}
        >
          <Text
            style={[styles.buttonText, showFriends && styles.activeButtonText]}
          >
            Show Friends
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            showGroups && styles.activeButton,
            styles.group,
          ]}
          onPress={handleSecondClick}
        >
          <Text
            style={[styles.buttonText, showGroups && styles.activeButtonText]}
          >
            Show Groups
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        {showFriends ? (
          <TouchableOpacity style={styles.dbutton}>
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="person-add-alt-1"
              size={20}
              color="white"
            />
            <Text style={{ color: "white" }}>Invite friends</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.dbutton}>
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="groups-2"
              size={20}
              color="white"
            />
            <Text style={{ color: "white" }}>Add groups</Text>
          </TouchableOpacity>
        )}
        {showFriends && (
          <ScrollView style={styles.listContainer}>
            {friendsData.map((friend, index) => (
              <TouchableOpacity key={index} style={styles.itemContainer}>
                <Image source={friend.avatar} style={styles.avatar} />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{friend.name}</Text>
                  <Text style={styles.phoneNumber}>{friend.phoneNumber}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        {showGroups && (
          <ScrollView style={styles.listContainer}>
            {groupData.map((group, index) => (
              <TouchableOpacity
              onPress={()=>groupDrop.current.open()}
              key={index} style={styles.itemContainer}>
                <Avatar
                  imageUrl="../assets/images/avt8.png"
                  addStyle={{ height: 60, marginRight: 20 }}
                />
                <View style={styles.infoContainer}>
                  <Text style={styles.groupName}>{group.name}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome6
                      style={{ marginRight: 10 }}
                      name="user-group"
                      size={12}
                      color="grey"
                    />
                    <Text style={styles.memberCount}>
                      {group.memberCount} Members
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
      <RBSheet
        ref={groupDrop}
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
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: 40
            }}
            onPress={() => groupDrop.current.close()}
          >
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Close friends</Text>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <InviteFriendToGroup />
        </View>
      </RBSheet>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonsContainer: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    width: "50%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 30,
  },
  activeButton: {
    backgroundColor: "black",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  activeButtonText: {
    color: "white",
  },
  friend: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  group: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  scrollContainer: {
    flex: 1, // This will make the scrollContainer take up all available vertical space
  },
  listContainer: {
    flex: 1, // This will make the ScrollView take up all available vertical space
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#666",
  },
  inviteButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "black",
    marginBottom: 20,
    borderRadius: 5,
  },
  inviteButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  groupName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  memberCount: {
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "black",
    marginBottom: 10,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  dbutton: {
    width: "100%",
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheetContent: {
    height: 0.7 * H,
    alignItems: "center",
  },
});

export default MyComponent;
