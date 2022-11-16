import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BalanceContextProvider } from "./contexts/BalanceContext";
import RootStack from "./screens/RootStack";
import BotContext, { BotContextProvider } from "./contexts/BotContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { WriteContextProvider } from "./contexts/WriteContext";

export default function App() {
  return (
    // <BottomSheetModalProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <BalanceContextProvider>
          <BotContextProvider>
            <WriteContextProvider>
              <RootStack />
            </WriteContextProvider>
            {/* <DrawerHeader/> */}
          </BotContextProvider>
        </BalanceContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
    // </BottomSheetModalProvider>
  );
}
