import React from 'react';
import {Pressable, StyleSheet ,View} from 'react-native';
import KeyboardComponent from './KeyboardComponent';

function KeyboardMethod({isCal_view, setIsCal}){

   
    return(
        <View style={styles.root}>
            <KeyboardComponent title="SMA" />
            <KeyboardComponent title="EMA" />
            <KeyboardComponent title="Double" />
            <KeyboardComponent title="Triple" />
            <KeyboardComponent title="+=/" isCal_view={isCal_view} setIsCal={setIsCal} Changer/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex : 1,
        backgroundColor: 'gray',
        flexDirection : 'row',
        flexWrap : 'wrap',
    },  
    button: {

    }
});

export default KeyboardMethod;