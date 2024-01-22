import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
const Stack = createNativeStackNavigator();

const StackNavigator = ({ screens }) => {
  const context = useContext(AuthContext);

  const screensSplited = screens.reduce((resultado, screen) => {
    const key = screen.protected ? "protected" : "public";

    if (!resultado[key]) {
      resultado[key] = [];
    }

    resultado[key].push(screen);

    return resultado;
  }, {});

  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      {context.isLoged()
        ? screensSplited.protected.map((s, i) => (
            <Stack.Screen
              name={s.name}
              component={s.component}
              key={i}
              options={s?.options ?? null}
            />
          ))
        : screensSplited.public.map((s, i) => (
            <Stack.Screen name={s.name} component={s.component} key={i} />
          ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
