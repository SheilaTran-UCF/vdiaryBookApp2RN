/* eslint-disable react-native/no-inline-styles */
// import {
//   AppImages,
//   ColorsCommon,
//   CtButton,
//   CtInputName,
//   FontsFamily,
//   ModalImages,
// } from '@/Assets';
import { AppImages } from '@/Assets';
import { ColorsCommon } from '@/Assets/Color';
import { FontsFamily } from '@/Assets/FontsFamily';
import { CommonIconButton } from '@/Commons';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
// import { GlobalUIManager } from '@/GlobalUI';
// import AccountApi from '@/Services/Api/AccountApi';
// import { UPLOAD_URL } from '@/Services/Network/Network';
import { NormalText } from '@/Theme';
import { NormalButton } from '@/Theme/Button';
import { NormalTextInput } from '@/Theme/TextInput';
import { translate } from '@/Translation/i18n';
// import { UserProfile } from '@/Types';
// import { ImageFormat } from '@/Utils/ImageFormat';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import React, { useImperativeHandle } from 'react';
// import { useTranslation } from 'react-i18next';
import {
  Modal,
  //   ScrollView,
  StyleSheet,
  //   TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  openOtp: () => void;
};
export const EmailModifyModal = React.forwardRef(({ openOtp }: Props, ref) => {
  //   const [t] = useTranslation();
  const [_email, setEmail] = React.useState('');
  const [_isShowModal, setShowModal] = React.useState(false);

  useImperativeHandle(ref, () => ({
    _toggleModal,
  }));
  const _toggleModal = () => {
    // _getFullListMember()
    setShowModal(!_isShowModal);
  };
  // useEffect(() => {
  //   _getFullListMember()
  // }, [])
  const _sendOtpRequire = () => {
    openOtp();
    _toggleModal();

    // AccountApi.forgotPass(_email)
    //   .then(res => {
    //     console.log('res send otp require', res);
    //     openOtp();
    //     _toggleModal();
    //   })
    //   .catch(err => {
    //     GlobalUIManager.view.showErrorFlashMsg({
    //       content: err,
    //     });
    //   });
  };

  return (
    <View>
      <Modal
        transparent={true}
        visible={_isShowModal}
        // style={{backgroundColor:'red', borderWidth: 10}}
        // transparent={false}
      >
        <View style={styles.container}>
          <View style={{ flex: 1 }} />
          {/* <TouchableOpacity onPress={_toggleModal} style={{ flex: 1 }} /> */}
          <View style={styles.modalContainer}>
            {/* <View> */}

            {/* </View> */}
            <NormalText text={translate('EmailVerify')} style={styles.title} />
            <NormalTextInput
              inputProps={{
                placeholder: translate('typeEmail'),
                value: _email,
                onChangeText: text => setEmail(text),
                style: styles.text,
              }}
              containerStyle={{
                paddingVertical: moderateScale(5),
                marginVertical: moderateScale(10),
              }}
            />
            <NormalButton
              btnText={translate('Send')}
              disable={_email === ''}
              onPress={_sendOtpRequire}
              containerStyle={{
                paddingHorizontal: moderateScale(15),
                paddingVertical: moderateScale(10),
                marginVertical: moderateScale(20),
                backgroundColor: ColorsCommon.DeepBlue,
              }}
              style={{
                fontSize: moderateScale(17),
              }}
            />
            <CommonIconButton
              source={AppImages.Close}
              width={20}
              height={20}
              onPress={_toggleModal}
              containerStyle={{
                position: 'absolute',
                top: moderateScale(10),
                right: moderateScale(25),
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(78,89,111,.02)',
  },
  title: {
    fontSize: moderateScale(17),
    fontFamily: FontsFamily.Roboto_Medium,
    color: ColorsCommon.DarkGrey,
  },
  element: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(25),
    paddingVertical: moderateScale(15),
    alignItems: 'center',
  },
  imageContainer: {
    width: moderateScale(25),
    height: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  text: {
    fontSize: moderateScale(17),
    color: ColorsCommon.Grey,
    // marginLeft: moderateScale(25)
    // marginRight: moderateScale(10)
  },
  line: {
    height: 1,
    marginHorizontal: moderateScale(25),
    backgroundColor: '#E9F0F4',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    padding: moderateScale(20),
    width: '100%',
    maxHeight: '75%',
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  elementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(7),
    paddingVertical: moderateScale(5),
    marginLeft: moderateScale(10),
    marginVertical: moderateScale(5),
  },
  elementText: {
    fontSize: moderateScale(15),
    color: ColorsCommon.BlueText,
    flex: 1,
    marginHorizontal: moderateScale(6),
  },
  inputContainer: {
    width: '100%',
    backgroundColor: ColorsCommon.SuperLightGrey,
    borderColor: ColorsCommon.SuperLightGrey,
    // flex: 1,
    borderRadius: moderateScale(50),
    paddingVertical: moderateScale(8),
  },
  inputStyle: {
    fontSize: moderateScale(13),
    paddingVertical: moderateScale(0),
  },
  icon: {
    width: moderateScale(14.29),
    height: moderateScale(14.55),
  },
});
