import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const [name, setName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');

const AddContactScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write name here"
        />
      </View>

      <View style={inputContainer}>
        <Text style={styles.inputTitle}>Phone Number</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write phone number here"
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>SAVE CONTACT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonView: {
    alignItems: 'center',
    margin: 16,
  },
  saveButton: {
    backgroundColor: '#B7F1D4',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
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
