import React from 'react';
import {Platform, Pressable, StyleSheet, View, Text} from 'react-native';

function CalculatorButton({text, onPress}){
    return(
        <View style={styles.wrapper}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    Platform.OS === 'ios' && {
                        opacity: pressed ? 0.6 : 1,
                    },
                ]}
                android_ripple={{color: 'white'}}
                onPress={onPress}>
                    <Text>{text}</Text>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 16,
        right : 16,
        width : 56,
        height: 56,
        borderRadius : 15,
        shadowColor: "#4d4d4d",
        shadowOffset: {width : 0, height : 4},
        shadowOpacity : 0.3,
        shadowRadius:  4,
        elevation : 5,
        overflow : Platform.select({android: 'hidden'}),
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 15,
        backgroundColor : 'gray',
        justifyContent: 'center',
        alignItems : 'center',
    }
});

export default CalculatorButton;