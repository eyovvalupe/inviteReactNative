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

export default function HomeScreen({ navigation }) {
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
      <View style={{ width: "80%" }}>
        <PButton
          handlePress={handleClick}
          text={
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                style={{ marginRight: 20 }}
                name="apple"
                size={24}
                color="black"
              />
              Login with Apple
            </Text>
          }
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
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
    marginTop: 0.1 * H,
    marginBottom: 0.05 * H,
    width: "50%",
    height: 0.3 * H,
    resizeMode: "contain",
  },
  logoText: {
    width: "70%",
    height: 0.2 * H,
    resizeMode: "contain",
  },
  buttonDiv: {
    width: "60%",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  btnImg: {
    width: "100%",
    borderWidth: 0,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
  },
  skip: {
    fontSize: 15,
    fontWeight: 900,
  },
  btnN: {
    width: "60%",
    height: 50,
    textAlign: "center",
    borderWidth: 3,
    borderRadius: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});
