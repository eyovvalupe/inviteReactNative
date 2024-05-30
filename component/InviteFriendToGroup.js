import React, { useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Avatar from "./avatar";
import RBSheet from "react-native-raw-bottom-sheet";

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

const InviteFriendToGroup = () => {
  const groupDrop = useRef();

  return (
    <View style={styles.container}>
      {/* <RBSheet
        ref={groupDrop}
        height={300}
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
        <View>
          <TouchableOpacity
            onPress={() => groupDrop.current.close()}
            style={styles.closeButton}
          >
            <Text>xxxxxxxxxxxx</Text>
          </TouchableOpacity>
        </View>
      </RBSheet> */}
      <View style={styles.scrollContainer}>
        <TouchableOpacity style={styles.dbutton}>
          <MaterialIcons
            style={{ marginRight: 10 }}
            name="person-add-alt-1"
            size={20}
            color="white"
          />
          <Text style={{ color: "white" }}>Add a friend to group</Text>
        </TouchableOpacity>

        <ScrollView style={styles.listContainer}>
          {friendsData.map((friend, index) => (
            <TouchableOpacity
            //   onPress={() => groupDrop.current.open()}
              key={index}
              style={styles.itemContainer}
            >
              <Image source={friend.avatar} style={styles.avatar} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{friend.name}</Text>
                <Text style={styles.phoneNumber}>{friend.phoneNumber}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
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
});

export default InviteFriendToGroup;
