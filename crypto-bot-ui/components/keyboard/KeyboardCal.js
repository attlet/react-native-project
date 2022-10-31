import React from 'react';
import {StyleSheet ,View} from 'react-native';
import KeyboardComponent from './KeyboardComponent';

function KeyboardCal({ onPressChange, isCal_view, method, setMethod}){
    return(
        <View style={styles.root}>
            <KeyboardComponent title='test2' method={method}/>
            <KeyboardComponent title='C' method={method}/>
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

export default KeyboardCal;