import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import realm from '../../store/realm';

const {navigation} = props;

const [name, setName] = useState('');

const [phoneNumber, setPhoneNumber] = useState('');

const saveContactName = text => {
  setName(text);
};

const savePhoneNumber = text => {
  setPhoneNumber(text);
};

const saveContact = () => {
  if (name !== '' && phoneNumber !== '') {
    realm.write(() => {
      const data = realm.objects('Contact');
      const lastId = data.length === 0 ? 1 : data[data.length - 1].id;

      realm.create('Contact', {
        id: data.length === 0 ? lastId : lastId + 1,
        name: name,
        phoneNumber: phoneNumber,
      });
    });

    navigation.navigate('ContactList');
  } else {
    Alert("Can't save your contact");
  }
};

const AddContactScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write name here"
          onChangeText={text => saveContactName(text)}
        />
      </View>

      <View style={inputContainer}>
        <Text style={styles.inputTitle}>Phone Number</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write phone number here"
          onChangeText={text => savePhoneNumber(text)}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.saveButton}
          //ragu-ragu
          onPress={() => saveContact()}
        >
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
