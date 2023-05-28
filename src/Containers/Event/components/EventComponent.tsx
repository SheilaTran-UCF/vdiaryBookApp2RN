import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';
import { CommonIconButton } from '@/Commons/IconButton';
import AppIcon from '@/Commons/AppIcon/AppIcon';
import Row from '@/Commons/Row/Row';
import Cell from '@/Commons/Row/Cell';
import { translate } from '@/Translation/i18n';

// interface Props {
//   onPressTitle: () => void,
//   onPressMoreAction: () => void
//   onPress
// }

const EventComponent = () => {
  const renderHeader = () => {
    return (
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    );
  };

  const renderTime = () => {
    return (
      <View style={styles.time}>
        <Text style={styles.timeTxt}>Tối nay 31/12/2021 00:00</Text>
        <CommonIconButton
          icon={{
            name: 'ellipsis-horizontal-outline',
            size: moderateScale(20),
            color: ColorsCommon.black,
          }}
        />
      </View>
    );
  };

  const renderAction = () => {
    return (
      <View style={styles.action}>
        <CommonIconButton
          icon={{
            name: 'staro',
            type: 'ant',
            size: moderateScale(20),
            color: ColorsCommon.black,
          }}
          text={translate('Care')}
          style={styles.actionButton}
        />
        <CommonIconButton
          icon={{
            name: 'checkcircle',
            type: 'ant',
            size: moderateScale(20),
            color: ColorsCommon.gray75,
          }}
          text={translate('Join')}
          style={styles.actionButton}
        />
        <CommonIconButton
          icon={{
            name: 'share-circle',
            type: 'md',
            size: moderateScale(20),
            color: ColorsCommon.gray75,
          }}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View>
        <Row>
          <AppIcon
            name="location-sharp"
            color={ColorsCommon.gray50}
            size={moderateScale(18)}
          />
          <Text style={styles.value}>Hà nội</Text>
        </Row>
        <Row>
          <Cell style={styles.cell}>
            <Text style={styles.label}>1050</Text>
            <Text style={styles.value}>{translate('InterestedPerson')}</Text>
          </Cell>
          <Cell style={styles.cell}>
            <Text style={styles.label}>365</Text>
            <Text style={styles.value}>{translate('Participants')}</Text>
          </Cell>
        </Row>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.body}>
        {renderTime()}
        <View style={styles.header}>
          <Text style={styles.title}>
            Vòng loại cúp C1: ManUtd vs Villarreal
          </Text>
        </View>
        {renderContent()}
        {renderAction()}
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </TouchableOpacity>
  );
};

export default EventComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    borderRadius: moderateScale(10),
    height: moderateScale(150),
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeTxt: {
    color: ColorsCommon.red,
    fontWeight: '500',
    fontSize: moderateScale(13),
  },
  header: {
    width: '100%',
    paddingVertical: 10,
  },
  title: {
    fontWeight: '700',
    color: ColorsCommon.black,
    fontSize: moderateScale(15),
  },
  body: {
    padding: 10,
  },
  information: {},
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  label: {
    fontWeight: '700',
    color: ColorsCommon.black,
    fontSize: moderateScale(12),
    marginRight: 5,
  },
  value: { color: ColorsCommon.gray75, fontSize: moderateScale(12) },
  cell: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});
