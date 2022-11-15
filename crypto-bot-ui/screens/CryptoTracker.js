import React, { useRef, useMemo, useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  View,
  Text,
} from "react-native";
import CardList from "../components/CardList";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { SAMPLE_DATA } from "../assets/data/sample";
import { SafeAreaView } from "react-native-safe-area-context";

function CryptoTracker() {
  const bottomSheetModalRef = useRef(null);
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);
  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  const openModal = (item) => {
    bottomSheetModalRef.current.present();
  };
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <CardList
          name={SAMPLE_DATA[0].name}
          symbol={SAMPLE_DATA[0].symbol}
          cur_price={SAMPLE_DATA[0].current_price}
          percentage={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
          logoURL={SAMPLE_DATA[0].image}
          onPress={() => openModal()}
        />
         <CardList
          name={SAMPLE_DATA[0].name}
          symbol={SAMPLE_DATA[0].symbol}
          cur_price={SAMPLE_DATA[0].current_price}
          percentage={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
          logoURL={SAMPLE_DATA[0].image}
          onPress={() => openModal()}
        />
         <CardList
          name={SAMPLE_DATA[0].name}
          symbol={SAMPLE_DATA[0].symbol}
          cur_price={SAMPLE_DATA[0].current_price}
          percentage={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
          logoURL={SAMPLE_DATA[0].image}
          onPress={() => openModal()}
        />
         <CardList
          name={SAMPLE_DATA[0].name}
          symbol={SAMPLE_DATA[0].symbol}
          cur_price={SAMPLE_DATA[0].current_price}
          percentage={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
          logoURL={SAMPLE_DATA[0].image}
          onPress={() => openModal()}
        />
         <CardList
          name={SAMPLE_DATA[0].name}
          symbol={SAMPLE_DATA[0].symbol}
          cur_price={SAMPLE_DATA[0].current_price}
          percentage={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
          logoURL={SAMPLE_DATA[0].image}
          onPress={() => openModal()}
        />
         <CardList
          name={SAMPLE_DATA[0].name}
          symbol={SAMPLE_DATA[0].symbol}
          cur_price={SAMPLE_DATA[0].current_price}
          percentage={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
          logoURL={SAMPLE_DATA[0].image}
          onPress={() => openModal()}
        />

        {/* <FlatList
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA} //추후 변
          renderItem={(item) => {
            <CardList
              name={item.name}
              symbol={item.symbol}
              cur_price={item.current_price}
              percentage={item.price_change_percentage_7d_in_currency}
              logoURL={item.image}
              onPress={() => openModal()}
            />;
          }}
        /> */}
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <Text>awsefe</Text>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CryptoTracker;
