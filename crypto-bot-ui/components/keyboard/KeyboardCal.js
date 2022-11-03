import React from 'react';
import {StyleSheet ,View} from 'react-native';
import KeyboardComponent from './KeyboardComponent';

function KeyboardCal({ isCal_view, setIsCal}){
    return(
        <View style={styles.root}>
            <KeyboardComponent title='+'/>
            <KeyboardComponent title='-'/>
            <KeyboardComponent title='*'/>
            <KeyboardComponent title='/'/>
            <KeyboardComponent title='%'/>
            <KeyboardComponent title='='/>
            <KeyboardComponent title='('/>
            <KeyboardComponent title=')'/>
            <KeyboardComponent title='1'/>
            <KeyboardComponent title='2'/>
            <KeyboardComponent title='3'/>
            <KeyboardComponent title='4'/>
            <KeyboardComponent title='5'/>
            <KeyboardComponent title='6'/>
            <KeyboardComponent title='7'/>
            <KeyboardComponent title='8'/>
            <KeyboardComponent title='9'/>
            <KeyboardComponent title='0'/>
            <KeyboardComponent title='Change' isCal_view={isCal_view} setIsCal={setIsCal} Changer/>
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

export default KeyboardCal;