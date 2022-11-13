import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OpenOrdersList from './OpenOrdersList';
import PositionsList from './PositionsList';
import TradeHistoryList from './TradeHistoryList';

const Tab = createMaterialTopTabNavigator();

function BotHistoryTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Open Orders" component={OpenOrdersList} options={{umountOnBlur: true}}/>
      <Tab.Screen name="Positions" component={PositionsList} options={{umountOnBlur: true}}/>
      <Tab.Screen name="Trade History" component={TradeHistoryList} options={{umountOnBlur: true}}/>
    </Tab.Navigator>
  );
}
export default BotHistoryTab;