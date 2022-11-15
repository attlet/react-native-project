import React,{useRef, useMemo} from "react";
import { StyleSheet, Platform, StatusBar, FlatList, View } from "react-native";
import CardList from "../components/CardList";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SAMPLE_DATA } from "../assets/data/sample";

function CryptoTracker() {

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = () => {
    bottomSheetModalRef.current.present()
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA} //추후 변경
        renderItem={({ item }) => {
          <CardList
            name={item.name}
            symbol={item.symbol}
            cur_price={item.current_price}
            percentage={item}
            logoURL={item.image}
            onPress={() => openModal()}
          />;
        }}
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset : {
      width : 0,
      height : -4,
    },
    shadowOpacity: 0.25,
    shadowRadius : 4,
    elevation: 5,
  }
});

export default CryptoTracker;
