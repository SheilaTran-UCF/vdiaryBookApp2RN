import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import SplashScreenNative from 'react-native-splash-screen';
import { GroupStackRouter } from '@/Navigators/Stack/GroupStask';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { translate } from '@/Translation/i18n';
import { useRoute } from '@react-navigation/native';
import { TInfoGroup } from '@/Types';
import { GroupImages } from '@/Assets/Image/GroupScreen';

interface IInfoGroupProps {
  infoGroup: TInfoGroup | null;
  action: number;
  onChangeAction: (action: number) => void;
}

export const InfoGroupScreen = (props: IInfoGroupProps) => {
  const router = useRoute();

  const width = moderateScale(Dimensions.get('screen').width);
  const totalItemAvt = Math.floor(
    (width - moderateScale(15) * 2) / moderateScale(22),
  );

  const totalItemExact = Math.floor(moderateScale(80) / moderateScale(22)) + 1;

  const ACTIONS_FILTER = [
    {
      id: 1,
      text: translate('PostGroup'),
    },
    {
      id: 2,
      text: translate('ImageGroup'),
    },
    {
      id: 3,
      text: translate('EventGroup'),
    },
  ];

  useEffect(() => {
    SplashScreenNative.hide();
  }, []);

  useEffect(() => {
    if (router.params) {
      //call api detail group
    }
  }, [router.params]);

  const renderAvtMember = (item: string, index: number) => {
    if (index == 0) {
      return (
        <Image
          style={styles.avtFirst}
          source={{ uri: item }}
          key={`${index}`}
        />
      );
    }
    return (
      <Image
        style={[styles.avt, { left: moderateScale(22) * index }]}
        source={{ uri: item }}
        key={`${index}`}
      />
    );
  };

  const renderActionFilter = (item: { id: number; text: string }) => {
    return (
      <TouchableOpacity
        style={styles.actionFilter}
        key={`${item.id}`}
        onPress={() => props.onChangeAction(item.id)}>
        <Text
          style={
            props.action == item.id ? styles.txtActionChoose : styles.txtAction
          }>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{ uri: props.infoGroup?.avatar }}
          resizeMode="cover"
        />
        <View style={styles.createUserContainer}>
          <Text
            style={styles.txtGroupWasCreatedBy}
            numberOfLines={1}
            ellipsizeMode="tail">
            {translate('GroupWasCreatedBy')}
          </Text>
          <Text
            style={styles.txtCreateUser}
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.infoGroup?.create_user}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={styles.txtNameGroup}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.infoGroup?.name}
        </Text>
        <Text
          style={styles.txtCountMember}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.infoGroup?.count_member + translate('MemberGroup')}
        </Text>
        <View style={styles.viewAvtMember}>
          {props.infoGroup?.lst_avt_member &&
            props.infoGroup?.lst_avt_member.map(
              (item, index) =>
                index < totalItemAvt - totalItemExact &&
                renderAvtMember(item, index),
            )}
          {props.infoGroup?.lst_avt_member &&
            totalItemAvt < props.infoGroup?.lst_avt_member.length && (
              <Text style={styles.viewAll}>{translate('ViewAll')}</Text>
            )}
        </View>
      </View>
      <View style={styles.viewBtnJoin}>
        <TouchableOpacity style={styles.btnGroupJoined}>
          <Image
            style={styles.iconGroupJoined}
            source={GroupImages.GroupJoined}
          />
          <Text style={styles.txtGroupJoined}>{translate('GroupJoined')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnInvite}>
          <Image style={styles.iconInvite} source={GroupImages.Invite} />
          <Text style={styles.txtInviteFriend}>
            {translate('InviteFriend')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewAction}>
        {ACTIONS_FILTER.map(item => renderActionFilter(item))}
      </View>
      <View style={styles.line} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    height: moderateScale(160),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  createUserContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -1,
    width: moderateScale(Dimensions.get('screen').width),
    backgroundColor: '#1F2F98',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(12),
  },
  txtGroupWasCreatedBy: {
    fontSize: moderateScale(13),
    color: 'white',
  },
  infoContainer: {
    marginHorizontal: moderateScale(15),
    flexDirection: 'column',
  },
  txtCreateUser: {
    fontSize: moderateScale(13),
    color: 'white',
    fontWeight: 'bold',
  },
  txtNameGroup: {
    marginVertical: moderateScale(15),
    fontSize: moderateScale(15),
    color: 'black',
    fontWeight: 'bold',
  },
  txtCountMember: {
    fontSize: moderateScale(13),
    color: 'black',
  },
  viewAvtMember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
    alignItems: 'center',
  },
  viewAll: {
    fontSize: moderateScale(11),
    color: '#00A2FF',
    maxWidth: moderateScale(80),
  },
  avtFirst: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
  },
  avt: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    position: 'absolute',
  },
  viewBtnJoin: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(15),
  },
  btnGroupJoined: {
    flexDirection: 'row',
    paddingVertical: moderateScale(7),
    paddingHorizontal: moderateScale(30),
    backgroundColor: '#0E58DB',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGroupJoined: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  txtGroupJoined: {
    color: 'white',
    fontSize: moderateScale(13),
    marginLeft: moderateScale(10),
  },
  btnInvite: {
    flexDirection: 'row',
    paddingVertical: moderateScale(7),
    paddingHorizontal: moderateScale(30),
    backgroundColor: '#E6E6E6',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconInvite: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  txtInviteFriend: {
    color: '#333333',
    fontSize: moderateScale(13),
    marginLeft: moderateScale(10),
  },
  viewAction: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(15),
  },
  actionFilter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: moderateScale(16),
    marginRight: moderateScale(15),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(18),
  },
  txtActionChoose: {
    fontSize: moderateScale(13),
    color: '#1F2F98',
    textDecorationLine: 'underline',
  },
  txtAction: {
    fontSize: moderateScale(13),
    color: '#333333',
  },
  line: {
    marginTop: moderateScale(20),
    height: 5,
    backgroundColor: 'rgba(51, 51, 51, 0.4)',
  },
});
