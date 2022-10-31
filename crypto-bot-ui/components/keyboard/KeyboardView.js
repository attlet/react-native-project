import React from 'react';
import {StyleSheet ,View} from 'react-native';
import KeyboardCal from './KeyboardCal';
import KeyboardMethod from './KeyboardMethod';

function KeyboardView({ method, setMethod}){
    const isCal_view = false;
    

    const onPress_change = () => {
        isCal_view = !isCal_view;
    }

    return(
        <View style={styles.root}>
            {isCal_view ? (
                <KeyboardCal onPressChange={onPress_change} isCal_view={isCal_view} method={method} setMethod={setMethod}/>
            ) : (
                <KeyboardMethod  onPressChange={onPress_change} isCal_view={isCal_view} method={method} setMethod={setMethod}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex : 1,
        backgroundColor: 'gray',
        flexDirection : 'row',
    },  
});

export default KeyboardView;