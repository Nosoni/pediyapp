import { useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../context/authContext";
const { height, width } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const context = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/shake.jpg")}
        style={[
          styles.container,
          {
            height: "100%",
            width: "100%",
          },
        ]}
      >
        <TextInput
          style={{
            backgroundColor: "white",
            width: "70%",
            height: 38,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
          }}
        ></TextInput>
        <View style={styles.viewButtons}>
          <Button title="iniciar" onPress={() => context.authContext.logIn()} />
          <Button
            title="Registrarte"
            onPress={() => navigation.navigate("Signin")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  viewButtons: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 20,
  },
});

export default Login;
