import React, { useRef, useEffect, useState } from "react";
import TabBar from "./layout/tabBar";
import { H, W } from "../utils/units";
import First from "./tabOne";
import Second from "./tabTwo";
import Third from "./tabThree";
import { useSelector } from "react-redux";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,

} from "react-native";

const UpRisingModal = ({ visible, animate, onClose }) => {
  const translateY = useRef(new Animated.Value(400)).current;
  const [type,setType] = useState(1);
  const field = useSelector(({nav}) => nav.tab)
  useEffect(() => {
    setType(field);
  },[field])
  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 400,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);
  const TypeCompo = () => {
    if(type ==1)
      return <First />
    else if(type == 2)
      return <Second />
    else  {
        return <Third />
      }
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container,]}
      // onPress={onClose}
    >
      <Animated.View
        style={[
          styles.modalView,
          (type == 3)&&styles.addStyle,
          (animate||(type == 3)) ? { transform: [{ translateY: translateY }] } : {},
        ]}
      >
        {/* <View style={styles.div}> */}
        <View style={styles.symDiv}>
          <View style={styles.topSym}></View>
        </View>
        <View style={[styles.childCon, (type == 3)&&styles.addChild,]}>
          <TypeCompo />
        </View>
        <TabBar />
        {/* </View> */}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 0.75 * H,
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    width: W,
    height: 0.75 * H,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  addStyle: {
    height: 0.9 * H
  },
  childCon: {
    width: "100%",
    height: 0.62 * H,
  },
  addChild: {
    height: 0.77 * H
  },
  topSym: {
    width: 40,
    height: 0.01 * H,
    backgroundColor: "grey",
    borderRadius: 3,
    marginTop: 0.01 * H,
    alignSelf: "center",
  },
  symDiv: {
    height: 0.05 * H,
  },
});

export default UpRisingModal;
