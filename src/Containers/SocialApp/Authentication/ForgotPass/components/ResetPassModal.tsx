/* eslint-disable react-native/no-inline-styles */
// import {
//   ColorsCommon,
//   CtButton,
//   CtInputName,
//   FontsFamily,
//   ModalImages,
// } from '@/Assets';
import { CommonIconButton } from '@/Commons';
import { NormalText } from '@/Theme';
import { NormalButton } from '@/Theme/Button';
import { NormalTextInput } from '@/Theme/TextInput';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import React, { useImperativeHandle } from 'react';
// import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import { translate } from '@/Translation/i18n';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';
import { AppImages } from '@/Assets';
import { FontsFamily } from '@/Assets/FontsFamily';
// import { FormSchemas } from '@/Assets/FormConstant';

type Props = {
  resetPass: (value: any, type: string) => void;
};
export const ResetPassModal = React.forwardRef(({ resetPass }: Props, ref) => {
  //   const [t] = useTranslation();
  const [_type, setType] = React.useState('');
  const [_isShowModal, setShowModal] = React.useState(false);

  useImperativeHandle(ref, () => ({
    _toggleModal,
    _chooseType,
  }));
  const _toggleModal = () => {
    // _getFullListMember()
    setShowModal(!_isShowModal);
  };
  const _chooseType = (type: string) => {
    setType(type);
  };

  const _resetPass = (value: any) => {
    resetPass(value, _type);
  };
  return (
    <View>
      <Modal transparent={true} visible={_isShowModal}>
        <View style={styles.container}>
          {/* <TouchableOpacity onPress={_toggleModal} style={{ flex: 1 }} /> */}
          <View style={{ flex: 1 }} />
          <View style={styles.modalContainer}>
            <NormalText text={translate('ResetPass')} style={styles.title} />
            <Formik
              initialValues={{
                newPass: '',
                confirmPassword: '',
              }}
              onSubmit={_resetPass}
              //   validationSchema={FormSchemas.resetPassSchema}
              validateOnChange={false}>
              {({ handleChange, handleSubmit, values, errors }: any) => (
                <>
                  <NormalTextInput
                    inputProps={{
                      placeholder: translate('NewPassword'),
                      value: values.newPass,
                      onChangeText: handleChange('newPass'),
                      style: styles.text,
                      secureTextEntry: true,
                    }}
                    containerStyle={{
                      paddingVertical: moderateScale(5),
                      marginVertical: moderateScale(10),
                    }}
                  />
                  {!!errors.newPass && (
                    <NormalText
                      text={translate(errors.newPass)}
                      style={styles.errorText}
                    />
                  )}

                  <NormalTextInput
                    inputProps={{
                      placeholder: translate('ConfirmPassword'),
                      value: values.confirmPassword,
                      onChangeText: handleChange('confirmPassword'),
                      style: styles.text,
                    }}
                    containerStyle={{
                      paddingVertical: moderateScale(5),
                      marginVertical: moderateScale(10),
                    }}
                  />
                  {!!errors.confirmPassword && (
                    <NormalText
                      text={translate(errors.confirmPassword)}
                      style={styles.errorText}
                    />
                  )}
                  <NormalButton
                    btnText={translate('Save')}
                    onPress={handleSubmit}
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
                </>
              )}
            </Formik>
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
  errorText: {
    color: ColorsCommon.error,
    fontStyle: 'italic',
    fontSize: moderateScale(12),
  },
});
