import React, {useState} from 'react';
import {StyleSheet ,View} from 'react-native';
import KeyboardCal from './KeyboardCal';
import KeyboardMethod from './KeyboardMethod';

function KeyboardView(){
    
    const [isCal_view, setIsCal] = useState(true);

    const setIs_prop = () => {
        setIsCal(!isCal_view);
    }

    return(
        <View style={styles.root}>
            {isCal_view ? (
                <KeyboardMethod isCal_view={isCal_view} setIsCal={setIs_prop}/>
            ) : (
                <KeyboardCal isCal_view={isCal_view} setIsCal={setIs_prop}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex : 1,
        backgroundColor: 'gray',
    },  
});

export default KeyboardView;