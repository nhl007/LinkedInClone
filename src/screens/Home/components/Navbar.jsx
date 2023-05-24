import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../../assets/colors';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text>A</Text>
      </TouchableOpacity>

      <TextInput
        placeholder='🔍 Search'
        style={styles.search}
        // onChangeText={(text) => console.log(text)}
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <AntDesign name='message1' size={32} color={colors.green1} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
    backgroundColor: colors.background,
  },
  profile: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.background,
    borderColor: colors.green1,
    borderWidth: 1,
  },
  search: {
    flex: 1,
    borderColor: colors.green1,
    borderWidth: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default Navbar;
