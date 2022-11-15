import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BalanceContextProvider } from "./contexts/BalanceContext";
import BotContext, { BotContextProvider } from "./contexts/BotContext";
import { Drawer } from "native-base";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  return (
    // <BottomSheetModalProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BalanceContextProvider>
            <BotContextProvider>
              <Drawer />
              <RootStack />
            </BotContextProvider>
          </BalanceContextProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    // </BottomSheetModalProvider>
  );
}
