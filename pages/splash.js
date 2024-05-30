import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { W, H } from "../utils/units";
  import { PButton } from "../component/Button";
  import { FontAwesome } from "@expo/vector-icons";
  
  export default function Splash({ navigation }) {
    const handleClick = () => {};
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/SplashArt.png")}
          style={styles.logo}
        />
        <Image
          source={require("../assets/images/DropLogo.png")}
          style={styles.logoText}
        />
        <Text style={styles.text}>
          Drop your deets,
          <br />
          get the gang outside!
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: "center",
    },
    logo: {
      marginTop: 0.25 * H,
      width: "50%",
      height: 0.3 * H,
      resizeMode: "contain",
    },
    logoText: {
      width: "70%",
      height: 0.2 * H,
      resizeMode: "contain",
      marginBottom: 20
    },
    text: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 20,
    },
    
  });
  