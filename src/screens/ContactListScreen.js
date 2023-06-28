import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';

const [data, setData] = useState([]);

const {navigation} = props;

const ContactListScreen = () => {
  return (
    <View style={styles.mainView}>
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.mainContainer}>
              <View>
                <Text style={styles.headerTitle}>{item.name}</Text>
                <Text style={styles.headerDescription}>{item.phoneNumber}</Text>
              </View>

              <TouchableOpacity>
                <Icon name="cross" type="entypo" />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddContact')} >
          <Icon name="plus" type="antdesign" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactListScreen;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
  mainContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerDescription: {
    fontSize: 18,
  },
  buttonView: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addButton: {
    backgroundColor: '#B7F1D4',
    padding: 16,
    borderRadius: 100,
  },
});
