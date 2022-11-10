import React, {useContext} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BotContext from '../../contexts/BotContext';

import { theme } from '../../Theme';

const DATA = {
    name: 'Test Bot1',
    type: 'type1',
    value: '1000',
    pnl: '100.1',
    roe: '10.1',
    status: 'running',
}

function BotValue({Id}) {
 
    const {BotData, setBotData} = useContext(BotContext);
    const isTrueId = (data) => {
        if(data.id === Id){
            return true;
        }
    }

    const temp_data = BotData.find(isTrueId);
    
    
    return (
        <View style={styles.bot_info}>
            <View style={styles.name_container}>
                <Text style={styles.bot_name}>{temp_data.name}</Text>
                <View>
                    {/* <Text style={styles.bot_type}>{DATA.type}</Text> */}
                    <Text style={styles.bot_status}>{DATA.status}</Text>
                </View>
            </View>
            <View style={{ paddingTop: theme.padding.s, borderBottomWidth: 1.5 }} />
            <View style={styles.item_row_container}>
                <Text style={styles.value_title_text}>Total Value</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.value_amount_text}>1000</Text>
                    <Text style={styles.value_unit_text}> USDT</Text>
                </View>
            </View>
            <View>
                <Text style={styles.value_title_text}>Today's PNL/ROE</Text>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.value_unit_text}>0/0%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    bot_info: {
        backgroundColor: theme.color.value_info,
        padding: theme.padding.l,
    },
    name_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item_row_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.padding.s,
    },
    bot_name: {
        fontSize: theme.fontSize.l,
        fontWeight: 'bold',
    },
    bot_type: {
        fontSize: theme.fontSize.m,
    },
    bot_status: {
        fontSize: theme.fontSize.s,
    },
    value_title_text: {
        fontSize: theme.fontSize.m,
    },
    value_amount_text: {
        fontSize: theme.fontSize.l,
    },
    value_unit_text: {
        fontSize: theme.fontSize.l,
        fontWeight: 'bold',
    },
});

export default BotValue;