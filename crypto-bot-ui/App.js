import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BalanceContextProvider } from "./contexts/BalanceContext";
import BotContext, { BotContextProvider } from "./contexts/BotContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BalanceContextProvider>
          <RootStack />
        </BalanceContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
