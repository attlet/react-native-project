import React from 'react';
import {Pressable, StyleSheet ,View} from 'react-native';
import KeyboardComponent from './KeyboardComponent';

function KeyboardMethod({ onPressChange, isCal_view, method, setMethod}){

   
    return(
        <View style={styles.root}>
            <KeyboardComponent title="test" method={method} setMethod={setMethod}/>
            <KeyboardComponent title="C" method={method} setMethod={setMethod}/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex : 1,
        backgroundColor: 'gray',
        flexDirection : 'row',
    },  
    button: {

    }
});

export default KeyboardMethod;