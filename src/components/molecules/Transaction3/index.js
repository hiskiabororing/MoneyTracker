import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Transaction3 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>19 April 2020</Text>
        <Text style={styles.text2}>Top Up</Text>
      </View>
      <Text style={styles.text3}>+Rp. 300.000</Text>
    </View>
  );
};

export default Transaction3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
  },
  text1: {
    fontSize: 14,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  text3: {
    fontSize: 16,
    fontFamily: 'Poppins-Black',
    color: '#1ABC9C',
  },
});
