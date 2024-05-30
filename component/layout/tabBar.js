import React, { useState } from "react";
import { H, W } from "../../utils/units";
import { connect } from "react-redux";
import { setNavOne, setNavTwo, setNavThree } from "../../actions";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
function TabBar({ state }) {
  const dispatch = useDispatch();
  const [pressState, setPressState] = useState({
    one: true,
    two: false,
    three: false,
  });

  const handleOne = () => {
    setPressState({
      one: true,
      two: false,
      three: false,
    });
    dispatch(setNavOne());
  };

  const handleTwo = () => {
    setPressState({
      one: false,
      two: true,
      three: false,
    });
    dispatch(setNavTwo());
  };

  const handleThree = () => {
    setPressState({
      one: false,
      two: false,
      three: true,
    });
    dispatch(setNavThree());
  };

  return (
    <View style={styles.container}>
      <View style={styles.tab1}>
        <TouchableOpacity style={styles.tabGround} onPress={handleOne}>
          {pressState.one ? (
            <Image
              style={styles.logo}
              source={require("../../assets/images/nav2.png")}
            />
          ) : (
            <Image
              style={styles.logo}
              source={require("../../assets/images/nav3.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.tab2}>
        <TouchableOpacity style={styles.tabGround} onPress={handleTwo}>
          {pressState.two ? (
            <Image
              style={styles.logo}
              source={require("../../assets/images/nav4.png")}
            />
          ) : (
            <Image
              style={styles.logo}
              source={require("../../assets/images/nav1.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.tab3}>
        <TouchableOpacity style={styles.tabGround} onPress={handleThree}>
          {pressState.three ? (
            <Image
              style={styles.logo}
              source={require("../../assets/images/avt2.png")}
            />
          ) : (
            <Image
              style={styles.logo1}
              source={require("../../assets/images/avt2.png")}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: 0.08 * H,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  tab1: {
    position: "absolute",
    width: 0.333 * W,
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tab2: {
    position: "absolute",
    width: 0.333 * W,
    backgroundColor: "black",
    height: "100%",
    left: 0.333 * W,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tab3: {
    position: "absolute",
    width: 0.333 * W,
    backgroundColor: "black",
    height: "100%",
    left: 0.666 * W,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
  logo1: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderWidth: 5,
    // borderColor: 'white'
  },
});

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {})(TabBar);
