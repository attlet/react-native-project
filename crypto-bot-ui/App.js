import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BalanceContextProvider } from "./contexts/BalanceContext";
import BotContext, { BotContextProvider } from "./contexts/BotContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import DrawerHeader from "./components/header/DrawerHeader";


export default function App() {
  return (
    // <BottomSheetModalProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BalanceContextProvider>
            <BotContextProvider>
              <DrawerHeader/>
              {/* <RootStack /> */}
            </BotContextProvider>
          </BalanceContextProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    // </BottomSheetModalProvider>
  );
}
