import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { NavigationController } from '@/Navigators/Services';
import { translate } from '@/Translation/i18n';
import { TGroup } from '@/Types';
import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import SplashScreenNative from 'react-native-splash-screen';
import { Tabs } from './Components/Tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GroupStackRouter } from '@/Navigators/Stack/GroupStask';

export const GroupScreen = ({}) => {
  const LIST_TABS = [
    { id: 1, name: translate('ManagerGroup') },
    { id: 2, name: translate('JoinedGroup') },
    { id: 3, name: translate('SuggestGroup') },
  ];

  const flatListRef = useRef<FlatList>(null);

  const [tab, setTab] = useState(1);

  //TODO: dummy data
  const DUMMY_DATA = [
    {
      id: '1',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: true,
      count_member: 37,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
    },
    {
      id: '2',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: false,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
    {
      id: '3',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: false,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
    {
      id: '4',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: false,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
    {
      id: '5',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: false,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
    {
      id: '6',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: false,
      count_member: 37,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
    },
    {
      id: '7',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: true,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
    {
      id: '8',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: false,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
    {
      id: '9',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: true,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
    {
      id: '10',
      name: 'Hội những người thích MXH Vdiarybook',
      is_active: true,
      count_member: 57,
      note: 'Hoạt động 45 phút trước',
      avatar:
        'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    },
  ];

  useEffect(() => {
    SplashScreenNative.hide();
  }, []);

  const chooseItem = (item: TGroup) => {
    //TODO:
    NavigationController.navigate(GroupStackRouter.DetailGroupScreen, {
      id: item.id,
    });
  };

  const renderItem = (item: TGroup) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => chooseItem(item)}>
        <View style={styles.avatarGroup}>
          <Image
            style={styles.avatar}
            source={{ uri: item.avatar }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.topRight}>
            <Text
              style={styles.txtNameGroup}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.name}
            </Text>
            {item.is_active && (
              <View style={styles.statusContainer}>
                <View style={styles.status} />
              </View>
            )}
          </View>
          <View style={styles.bottomRight}>
            <Text
              style={styles.txtMember}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.count_member + translate('MemberGroup')}
            </Text>
            <Text style={styles.txtNote} numberOfLines={1} ellipsizeMode="tail">
              {item.note + translate('MemberGroup')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* //TODO:  */}
      <View style={styles.headerContainer}>
        <Text style={styles.txtHeader}>{translate('HeaderGroup')}</Text>
      </View>
      <Tabs
        listTab={LIST_TABS}
        tab={tab}
        onChooseTab={(id: number) => {
          setTab(id);
          flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
        }}
      />
      <FlatList
        ref={flatListRef}
        style={{ flex: 1 }}
        data={DUMMY_DATA}
        renderItem={({ item }) => renderItem(item)}
      />
      <TouchableOpacity
        style={styles.btnAdd}
        onPress={() =>
          NavigationController.navigate(GroupStackRouter.CreateGroupScreen)
        }>
        <MaterialIcons name="add" size={moderateScale(30)} color={'#fff'} />
      </TouchableOpacity>
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
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(7),
  },
  avatarGroup: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(15),
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: moderateScale(10),
  },
  txtNameGroup: {
    color: 'black',
    fontSize: moderateScale(15),
    flex: 1,
  },
  topRight: {
    flexDirection: 'row',
  },
  bottomRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusContainer: {
    width: moderateScale(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  status: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: '#0E58DB',
  },
  txtMember: {
    color: 'rgba(51, 51, 51, 0.8)',
    fontSize: moderateScale(13),
  },
  txtNote: {
    color: 'rgba(51, 51, 51, 0.8)',
    fontSize: moderateScale(13),
    marginLeft: moderateScale(10),
  },
  btnAdd: {
    position: 'absolute',
    bottom: moderateScale(50),
    right: moderateScale(50),
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(50),
    backgroundColor: '#1F2F98',
    paddingLeft: moderateScale(10),
    justifyContent: 'center',
  },
});
