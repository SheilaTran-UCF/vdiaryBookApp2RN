import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import SplashScreenNative from 'react-native-splash-screen';
import { GroupStackRouter } from '@/Navigators/Stack/GroupStask';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { translate } from '@/Translation/i18n';
import { useRoute } from '@react-navigation/native';
import { InfoGroupScreen } from './Components/InfoGroupScreen';
import { TInfoGroup } from '@/Types';
import { PostScreen } from './Components/PostScreen';

export const DetailGroupScreen = ({}) => {
  const router = useRoute();

  const [infoGroup, setInfoGroup] = useState<TInfoGroup | null>(null);
  const [action, setAction] = useState(1);

  const DUMMY_DATA = {
    id: 1,
    name: 'Hội những người thích MXH Vdiarybook',
    count_member: 37,
    status: 1,
    create_user: 'Bùi Công Minh',
    avatar:
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
    lst_avt_member: [
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
      'https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg',
      'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
    ],
  };
  useEffect(() => {
    SplashScreenNative.hide();
  }, []);

  useEffect(() => {
    if (router.params) {
      //call api detail group
      setInfoGroup(DUMMY_DATA);
    }
  }, [router.params]);

  return (
    <View style={styles.container}>
      {/* //TODO:  */}
      <View style={styles.headerContainer}></View>
      <ScrollView style={styles.contentContainer}>
        <InfoGroupScreen
          infoGroup={infoGroup}
          action={action}
          onChangeAction={action => setAction(action)}
        />
        <PostScreen />
      </ScrollView>
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
    height: moderateScale(50),
  },
  contentContainer: {
    flex: 1,
  },
});
