import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function BorderedInput({hasMarginBottom, ...rest}, ref, onSubmit) {
  return (
    <TextInput
      style={[styles.input, hasMarginBottom && styles.margin]}
      ref={ref}
      onSubmitEditing={onSubmit}
      {...rest}
      
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

export default BorderedInput;
