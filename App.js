import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/StackNavigator";
import { screensNavigation } from "./constants/screensNavigation";
import { AuthContext, authContext } from "./context/authContext";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <AuthContext.Provider value={authContext()}>
      <NavigationContainer>
        <StackNavigator screens={screensNavigation} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
