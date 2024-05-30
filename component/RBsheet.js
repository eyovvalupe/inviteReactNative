import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const MyComponent = () => {
  const bottomSheetRef = useRef();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => bottomSheetRef.current.open()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <RBSheet
        ref={bottomSheetRef}
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
        <View style={styles.bottomSheetContent}>
          <TouchableOpacity
            onPress={() => bottomSheetRef.current.close()}
            style={styles.closeButton}
          >
          <Text>xxxxxxxxxxxx</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  bottomSheetContent: {
    padding: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MyComponent;
