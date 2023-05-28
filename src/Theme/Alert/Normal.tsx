/* eslint-disable react-native/no-inline-styles */
import { AppColors, AppImages } from '@/Assets';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { translate } from '@/Translation/i18n';
import React from 'react';
import {
  View,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { NormalText } from '../Text';

export type ALERT_TYPE = {
  success: 'success';
  danger: 'danger';
  warning: 'warning';
  info: 'info';
  default: 'default';
};
export interface GlobalAlertShowingOption {
  content: string;

  type?: ALERT_TYPE;
  title?: string;
  confirmTitle?: string;
  onConfirmPress?: () => void;
  cancelTitle?: string;
  onCancelPress?: () => void;
  onRequestClose?: () => void;
}
export interface NormalAlertState {
  visible: boolean;
  alertOpts: GlobalAlertShowingOption | any;
}
const DF_ALERT_OPTS = {
  content: 'Contenu du message',

  type: 'success',
  onRequestClose: undefined,
  title: undefined,

  confirmTitle: undefined,
  onConfirmPress: undefined,
  cancelTitle: undefined,
  onCancelPress: undefined,
};
type Props = {};
class NormalAlertComp extends React.Component<Props, NormalAlertState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      visible: false,
      alertOpts: DF_ALERT_OPTS,
    };
  }

  showFlashMsg = (alertOpts: GlobalAlertShowingOption) => {
    this.setState({
      visible: true,
      alertOpts: alertOpts,
    });
  };

  onAlertRequestToClose = () => {
    const { alertOpts } = this.state;
    alertOpts.onRequestClose && alertOpts.onRequestClose();
    this.setState({ visible: false, alertOpts: DF_ALERT_OPTS });
  };

  onAlertConfirm = () => {
    const { alertOpts } = this.state;
    const didSet = () => {
      setTimeout(() => {
        alertOpts.onConfirmPress && alertOpts.onConfirmPress();
      }, 200);
    };
    this.setState({ visible: false, alertOpts: DF_ALERT_OPTS }, didSet);
  };

  _onRequestClose = () => {
    const { alertOpts } = this.state;
    alertOpts.onRequestClose && alertOpts.onRequestClose();
    this.setState({ visible: false, alertOpts: DF_ALERT_OPTS });
  };

  _onConfirmPress = () => {
    const { alertOpts } = this.state;
    alertOpts.onConfirmPress && alertOpts.onConfirmPress();
    this.setState({ visible: false, alertOpts: DF_ALERT_OPTS });
  };

  _onCancelPress = () => {
    const { alertOpts } = this.state;
    alertOpts.onCancelPress && alertOpts.onCancelPress();
    this.setState({ visible: false, alertOpts: DF_ALERT_OPTS });
  };

  _renderAlertColor = () => {
    let _renderAlertIcon = {
      success: AppColors.success,
      danger: AppColors.error,
      warning: AppColors.warning,
      info: AppColors.info,
      default: AppColors.info,
    };
    return !!this.state.alertOpts.type
      ? _renderAlertIcon[this.state.alertOpts.type]
      : _renderAlertIcon.default;
  };

  // "success" | "danger" | 'warning' | "info"
  _renderIcon = () => {
    let _renderAlertIcon = {
      success: () => {
        return (
          <Image
            source={AppImages.alert_warning}
            style={styles.icon}
            resizeMode={'contain'}
          />
        );
      },
      danger: () => {
        return (
          <Image
            source={AppImages.alert_warning}
            style={styles.icon}
            resizeMode={'contain'}
          />
        );
      },
      warning: () => {
        return (
          <Image
            source={AppImages.alert_warning}
            style={styles.icon}
            resizeMode={'contain'}
          />
        );
      },
      info: () => {
        return (
          <Image
            source={AppImages.alert_warning}
            style={styles.icon}
            resizeMode={'contain'}
          />
        );
      },
      default: () => {
        return (
          <Image
            source={AppImages.alert_warning}
            style={styles.icon}
            resizeMode={'contain'}
          />
        );
      },
    };
    return !!this.state.alertOpts.type
      ? _renderAlertIcon[this.state.alertOpts.type]()
      : _renderAlertIcon.default();
  };

  render() {
    const { visible, alertOpts } = this.state;
    const { onRequestClose, title, content, confirmTitle, cancelTitle } =
      alertOpts;
    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        animationType="fade"
        transparent>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            this._onRequestClose();
          }}>
          <View style={styles.container}>
            <StatusBar
              backgroundColor="rgba(0,0,0,0.7)"
              barStyle="light-content"
            />

            <View
              style={{
                position: 'relative',
                backgroundColor: 'white',
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(20),

                borderRadius: moderateScale(10),
                // justifyContent: 'center',
                // alignItems: 'center',
                shadowOpacity: 0.4,
                shadowRadius: 5,
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: { height: 0, width: 0 },
                width: '90%',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <NormalText
                  style={styles.title}
                  text={title || translate('title_btn_confirm')}
                />
                <TouchableOpacity onPress={this._onRequestClose}>
                  <Image
                    source={AppImages.ic_close}
                    style={styles.iconClose}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#cccccc',
                  height: 0.5,
                  marginVertical: 15,
                }}
              />
              <View style={styles.boxContainer}>
                {this._renderIcon()}
                <NormalText
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    width: '90%',
                    fontSize: moderateScale(25),
                  }}>
                  {content}
                </NormalText>
              </View>
              <View
                style={{
                  backgroundColor: '#cccccc',
                  height: 0.5,
                  marginVertical: 15,
                }}
              />
              <View
                style={[
                  {
                    flexDirection: 'row',
                    paddingVertical: 10,
                  },
                  !!cancelTitle
                    ? {
                        justifyContent: 'space-evenly',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}>
                {!!cancelTitle && (
                  <View style={styles.btnContainer}>
                    <TouchableOpacity
                      onPress={this._onCancelPress}
                      style={[
                        styles.btn,
                        {
                          backgroundColor: '#e5eaf0',
                          paddingVertical: 10,
                        },
                      ]}>
                      <NormalText
                        text={'Annuler'}
                        style={{
                          color: '#7e807f',
                          fontSize: moderateScale(21),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={this._onConfirmPress}
                    style={[
                      styles.btn,
                      {
                        borderColor: this._renderAlertColor(),
                        borderWidth: 2,
                      },
                    ]}>
                    <NormalText
                      text={
                        confirmTitle
                          ? confirmTitle
                          : translate('title_btn_confirm')
                      }
                      style={{
                        color: this._renderAlertColor(),
                        fontSize: moderateScale(26),
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export const NormalAlert = NormalAlertComp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51,51,51,0.2)',
    paddingLeft: '10%',
    paddingRight: '10%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    width: '100%',
  },
  title: {
    flex: 1,
    color: '#222222',
    fontSize: moderateScale(25),
  },
  image: { width: moderateScale(35), height: moderateScale(35) },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSelect: {
    height: moderateScale(50),
    marginVertical: 10,
  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  icon: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  iconClose: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});
