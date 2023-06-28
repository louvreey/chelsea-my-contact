import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

export const ContactNameComponent = props => {
  const {title, ph} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={inputContainer}>
        <Text style={styles.inputTitle}>{title}</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder={ph}
          {...props}
        />
      </View>
    </View>
  );
};

export const ContactNumberComponent = props => {
  const {number} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={inputContainer}>
        <Text style={styles.inputTitle}>{number}</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write phone number here"
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
  inputContainer: {
    margin: 16,
    marginBottom: 0,
  },
  inputTitle: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
  },
});
