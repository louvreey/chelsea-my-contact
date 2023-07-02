import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';
import realm from '../../store/realm';

const ContactListScreen = (props) => {
  const [data, setData] = useState([]);

  const {navigation} = props;

  const getData = () => {
    const allData = realm.objects('Contact');
    setData(allData);
  };

  useEffect(() => {
    const contactPage = navigation.addListener('focus', () => {
      getData('');
    });
    return contactPage;
  }, []);

  const deleteContact = id => {
    const data = realm.objects('Contact').filtered(`id = ${id}`);
    realm.write(() => {
      realm.delete(data);
    });

    const collectData = realm.objects('Contact');
    setData(collectData);
  };

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

              <TouchableOpacity onPress={() => deleteContact(item.id)}>
                {/* <Icon name="cross" type="entypo" size={50} color="black" /> */}
                <Text style={{fontWeight: 'bold'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.unsearchBox}>
            <Text>No items.</Text>
          </View>
        }
      />

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddContact')}>
          {/* <Icon name="plus" type="antdesign" size={24} color="black" /> */}
          <Text style={{fontWeight: 'bold'}}>New</Text>
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
  unsearchBox: {
    alignItems: 'center',
    margin: 8,
  },
});
