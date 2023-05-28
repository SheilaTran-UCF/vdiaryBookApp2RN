import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { NavigationController } from '@/Navigators/Services';
import { translate } from '@/Translation/i18n';
import { TGroup } from '@/Types';
import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import SplashScreenNative from 'react-native-splash-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const CreateGroupScreen = ({}) => {
  const [nameGroup, setNameGroup] = useState('');
  const [descriptionGroup, setDescriptionGroup] = useState('');

  useEffect(() => {
    SplashScreenNative.hide();
  }, []);

  const onPressCreateBtn = () => {
    //TODO:
    //Validate
    //call api create group
    NavigationController.goBack();
  };

  return (
    <View style={styles.container}>
      {/* //TODO:  */}
      <View style={styles.headerContainer}>
        <Text style={styles.txtHeader}>{translate('CreateTitle')}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.required}>*</Text>
            <Text style={styles.title}>{translate('NameGroup')}</Text>
          </View>
          {/* //TODO:  */}
          <View style={[styles.inpContainer, styles.mrgTop10]}>
            <TextInput
              style={styles.inpName}
              placeholder={translate('PlaceHolderName')}
              onChangeText={value => setNameGroup(value)}
              value={nameGroup}
            />
          </View>
          <View style={[styles.titleContainer, styles.mrgTop10]}>
            <Text style={styles.title}>{translate('DecrGroup')}</Text>
          </View>
          {/* //TODO:  */}
          <View style={[styles.inpContainer, styles.mrgTop10]}>
            <TextInput
              multiline={true}
              numberOfLines={6}
              placeholder={translate('PlaceHolderDesc')}
              style={styles.inpDesc}
              onChangeText={value => setDescriptionGroup(value)}
              value={descriptionGroup}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => onPressCreateBtn()}>
          <Text style={styles.txtBtnAdd}>{translate('CreateGroup')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  headerContainer: {
    height: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: moderateScale(19),
    color: '#333333',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(10),
  },
  btnAdd: {
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: '#1F2F98',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnAdd: {
    fontSize: moderateScale(17),
    color: '#ffffff',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  required: {
    fontSize: moderateScale(16),
    color: 'red',
    marginRight: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(15),
    color: 'black',
  },
  inpContainer: {
    flexDirection: 'row',
  },
  inpName: {
    flex: 1,
    height: moderateScale(50),
    padding: moderateScale(15),
    borderWidth: moderateScale(2),
    borderColor: '#E6E6E6',
    borderRadius: moderateScale(16),
  },
  inpDesc: {
    flex: 1,
    height: moderateScale(130),
    padding: moderateScale(15),
    borderWidth: moderateScale(2),
    borderColor: '#E6E6E6',
    borderRadius: moderateScale(16),
    textAlignVertical: 'top',
  },
  mrgTop10: {
    marginTop: moderateScale(10),
  },
});
