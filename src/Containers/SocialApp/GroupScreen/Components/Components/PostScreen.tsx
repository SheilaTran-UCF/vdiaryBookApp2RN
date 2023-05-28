import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { translate } from '@/Translation/i18n';
import { TPostGroup, TSourceLikeGroup, TSourcePostGroup } from '@/Types';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const PostScreen = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      user_post: {
        user_post_name: 'Nguyễn Ngọc Hà',
        user_avt:
          'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
        user_id: 1,
      },
      feeling: 'đang cảm thấy vui vẻ',
      active: '15 phút trước.',
      public: 1,
      address: 'Hà Nội',
      status: 'Cuối tuần rảnh rỗi đi cafe thư giãn',
      lst_source: [
        {
          id: 1,
          src: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
        },
        {
          id: 2,
          src: 'https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg',
        },
        {
          id: 3,
          src: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg',
        },
        {
          id: 4,
          src: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
        },
      ],
      count_like: 10,
      count_comment: 0,
      count_share: 0,
      lst_avt_like: [
        {
          id: 1,
          src: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
          name: 'Kiên',
        },
        {
          id: 2,
          src: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
          name: 'Long',
        },
        {
          id: 3,
          src: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg',
          name: 'Trung',
        },
      ],
    },
  ];

  const renderSoureImage = (item: TSourcePostGroup) => {
    return (
      <Image style={styles.source} source={{ uri: item.src }} key={item.id} />
    );
  };

  const renderAvtLike = (item: TSourceLikeGroup, index: number) => {
    if (index == 0) {
      return (
        <Image
          style={styles.avtFirst}
          source={{ uri: item.src }}
          key={`${index}`}
        />
      );
    }
    return (
      <Image
        style={[styles.avtLike, { left: moderateScale(9) * index }]}
        source={{ uri: item.src }}
        key={`${index}`}
      />
    );
  };

  const renderNameLike = (
    item: TSourceLikeGroup,
    index: number,
    length: number,
  ) => {
    return (
      <Text style={styles.nameLike}>
        {item.name + (index == length - 1 ? translate('AndGroup') : ',')}
      </Text>
    );
  };

  const renderItemPost = (item: TPostGroup) => {
    return (
      <View>
        <View style={styles.headerPost}>
          <View style={styles.userPostInfo}>
            <Image
              style={styles.avt}
              source={{ uri: item.user_post.user_avt }}
              resizeMode="cover"
            />
            <View style={styles.userInfo}>
              <View style={styles.user}>
                <Text style={styles.txtName}>
                  {item.user_post.user_post_name}
                </Text>
                <Text style={styles.txtFeeling}>{item.feeling}</Text>
              </View>
              <View style={styles.userInfoOrther}>
                <Text
                  style={styles.txtActive}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.active}
                </Text>
                {/* TODO */}
                <View style={styles.statusPublic}>
                  <FontAwesome5 name="globe-americas" size={14} />
                  <Text
                    style={styles.txtStatusPublic}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    Tất cả mọi người
                  </Text>
                </View>
                <View style={styles.address}>
                  <Ionicons
                    name="location-outline"
                    size={14}
                    color={'#FF5F1F'}
                  />
                  <Text
                    style={styles.txtAddress}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.address}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.iconMore}>
              <Ionicons
                name="ios-ellipsis-horizontal"
                size={22}
                color={'rgba(51, 51, 51, 0.6)'}
              />
            </View>
          </View>
          <Text style={styles.txtStatus} ellipsizeMode="tail">
            {item.status}
          </Text>
        </View>
        <FlatList
          style={{ backgroundColor: 'red' }}
          data={item.lst_source}
          numColumns={2}
          renderItem={({ item }) => renderSoureImage(item)}
        />
        <View style={styles.viewLikeCmtShare}>
          <Ionicons name="ios-heart" size={16} color={'#FF5F1F'} />
          <Text style={styles.txtCountLike}>{item.count_like}</Text>
          <FontAwesome
            style={styles.iconCmt}
            name="comment"
            size={16}
            color={'#1F2F98'}
          />
          <Text style={styles.txtCountLike}>{item.count_comment}</Text>
          <FontAwesome
            style={styles.iconCmt}
            name="share"
            size={16}
            color={'#1F2F98'}
          />
          <Text style={styles.txtCountLike}>{item.count_share}</Text>
        </View>
        <View style={styles.viewLike}>
          <View style={styles.widthAvtLike}>
            {item.lst_avt_like.length > 0 &&
              item.lst_avt_like.map((el, index) => renderAvtLike(el, index))}
          </View>
          {item.lst_avt_like.length > 0 &&
            item.lst_avt_like.map((el, index) =>
              renderNameLike(el, index, item.lst_avt_like.length),
            )}
          <Text style={styles.numOrtherLike}>
            {Number(item.count_like - item.lst_avt_like.length) +
              translate('OrtherLike')}
          </Text>
        </View>
        <View style={styles.wrapBorder} />
        <View style={styles.viewAction}>
          <View style={styles.action}>
            <Ionicons name="heart-outline" size={16} color={'#FF5F1F'} />
            <Text style={styles.txtAction}>{translate('ActionLike')}</Text>
          </View>
          <View style={styles.action}>
            <FontAwesome5 name="comment" size={16} color={'#1F2F98'} />
            <Text style={styles.txtAction}>{translate('ActionComment')}</Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="share" size={16} color={'#1F2F98'} />
            <Text style={styles.txtAction}>{translate('ActionShare')}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_DATA}
        renderItem={({ item }) => renderItemPost(item)}
        keyExtractor={item => `${item}`}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  headerPost: {
    margin: moderateScale(10),
  },
  userPostInfo: {
    flexDirection: 'row',
  },
  avt: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  userInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  txtName: {
    fontSize: moderateScale(15),
    color: 'black',
    fontWeight: '600',
  },
  txtFeeling: {
    fontSize: moderateScale(13),
    color: 'rgba(51, 51, 51, 0.8)',
    marginLeft: moderateScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoOrther: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
  },
  txtActive: {
    flex: 1,
    fontSize: moderateScale(11),
    color: 'rgba(51, 51, 51, 0.8)',
  },
  statusPublic: {
    flex: 1,
    flexDirection: 'row',
  },
  txtStatusPublic: {
    fontSize: moderateScale(11),
    color: 'rgba(51, 51, 51, 0.8)',
    marginLeft: moderateScale(5),
  },
  address: {
    flex: 0.7,
    flexDirection: 'row',
  },
  txtAddress: {
    fontSize: moderateScale(11),
    color: 'rgba(51, 51, 51, 0.8)',
    marginLeft: moderateScale(5),
  },
  iconMore: {
    width: moderateScale(30),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStatus: {
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(15),
    fontSize: moderateScale(15),
    color: '#333333',
  },
  source: {
    flex: 1,
    height: moderateScale(149),
  },
  viewLikeCmtShare: {
    flexDirection: 'row',
    margin: moderateScale(10),
    alignItems: 'center',
  },
  txtCountLike: {
    fontSize: moderateScale(13),
    color: '#333333',
    marginLeft: moderateScale(5),
  },
  iconCmt: {
    marginLeft: moderateScale(10),
  },
  avtFirst: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  avtLike: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    position: 'absolute',
  },
  viewLike: {
    flexDirection: 'row',
    margin: moderateScale(10),
    alignItems: 'center',
    paddingBottom: moderateScale(5),
  },
  widthAvtLike: {
    width: moderateScale(40),
  },
  nameLike: {
    fontWeight: '600',
    fontSize: moderateScale(11),
    color: '#1F2F98',
  },
  numOrtherLike: {
    fontSize: moderateScale(11),
    color: '#333333',
  },
  wrapBorder: {
    height: 2,
    backgroundColor: '#F0F0F0',
    marginHorizontal: moderateScale(10),
  },
  viewAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
    marginHorizontal: moderateScale(20),
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtAction: {
    fontSize: moderateScale(11),
    color: '#333333',
    marginLeft: moderateScale(10),
  },
});
