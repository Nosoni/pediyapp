import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Signin = ({ navigation }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.content}>
        <Text>Signin 20</Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          position: "absolute",
          bottom: 30,
          right: 15,
          backgroundColor: "blue",
          width: 60,
          height: 60,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>Iniciar</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    borderWidth: 2,
    borderStyle: "solid",
    borderEndColor: "#ff00ff",
    borderBottomColor: "aqua",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Signin;
