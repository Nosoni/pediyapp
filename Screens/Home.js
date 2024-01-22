import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../context/authContext";

const Pedido = () => {
  return (
    <View style={styles.container}>
      <Text>Pedido</Text>
    </View>
  );
};
const Producto = () => {
  return (
    <View style={styles.container}>
      <Text>Producto</Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const Home = () => {
  const context = useContext(AuthContext);

  return (
    <Drawer.Navigator
      initialRouteName="Pedido"
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Logout"
            onPress={() => context.authContext.signOut()}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="Pedido" component={Pedido} />
      <Drawer.Screen name="Producto" component={Producto} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
