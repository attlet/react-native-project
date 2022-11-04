import React, {useState, useContext} from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { list_theme } from '../../Theme';
import BotContext from '../../contexts/BotContext';




const Item = ({ item }) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('BotInfo');
    };

    return (
        <View style={styles.item_container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.header_container}>
                    <Text style={styles.symbol_text}>{item.name}</Text>
                    <Text style={styles.title_text}>{item.type}</Text>
                </View>
                <View style={styles.row_container}>
                    <View>
                        <Text style={styles.title_text}>Value</Text>
                        <Text style={styles.content_text}>{item.amount}</Text>
                    </View>
                    <View style={styles.rigth_side_view}>
                        <Text style={styles.title_text}>PNL/ROE</Text>
                        <Text style={styles.content_text}>{item.pnl + '/' + item.roe + '%'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

function BotList() {
    const {BotData, setBotData} = useContext(BotContext);

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <FlatList
            data={BotData}
            renderItem={renderItem}
            contentContainerStyle={styles.root}
            keyExtractor={item => item.id}
        />
    );
}

const styles = list_theme;

export default BotList;