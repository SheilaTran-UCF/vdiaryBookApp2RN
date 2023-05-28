/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import GlobalUIManager from './GlobalUIManager';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { Platform } from 'react-native';
import { GlobalAlertShowingOption, NormalAlert } from '@/Theme/Alert';
import { NormalLoading } from '@/Theme/Loading';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';

export interface GloablUIState {
  isLoading: boolean;
  loadingMsg: string;
}

type Props = {
  t?: any;
};
export class GloablUI extends React.Component<Props, GloablUIState> {
  alertRef = React.createRef<any>();

  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      loadingMsg: '',
    };
    GlobalUIManager.view = this;
  }

  showLoading = (loadingMsg?: string) => {
    this.setState({
      isLoading: true,
      loadingMsg: loadingMsg ? loadingMsg : '',
    });
  };

  hideLoading = (onHidedLoading?: () => void) => {
    this.setState(
      { isLoading: false },
      () => onHidedLoading && onHidedLoading(),
    );
  };

  showAlert = (alertOpts: GlobalAlertShowingOption) => {
    this.alertRef.current?.showFlashMsg(alertOpts);
  };

  showSuccessAlert = (alertOpts: GlobalAlertShowingOption) => {
    const { t } = this.props;
    this.alertRef.current?.showFlashMsg(
      Object.assign(
        {
          type: 'success',
          title: t('alertMsg.title_error'),
          // confirmTitle: "XÁC NHẬN"
        },
        alertOpts,
      ),
    );
  };

  showErrAlert = (alertOpts: GlobalAlertShowingOption) => {
    const { t } = this.props;
    this.alertRef.current?.showFlashMsg(
      Object.assign(
        {
          type: 'danger',
          title: t('alertMsg.title_error'),
          // confirmTitle: "XÁC NHẬN"
        },
        alertOpts,
      ),
    );
  };

  showFlashMsg = (alertOpts: GlobalAlertShowingOption) => {
    showMessage({
      message: alertOpts.title ? alertOpts.title : alertOpts.content,
      description: alertOpts.title ? alertOpts.content : undefined,
      type: alertOpts.type as any,
    });
  };

  showErrorFlashMsg = (alertOpts: GlobalAlertShowingOption) => {
    const { t } = this.props;
    showMessage({
      message:
        alertOpts.title || alertOpts.content || t('flashMsg.title_error'),
      description: alertOpts.title ? alertOpts.content : undefined,
      type: 'danger',
      style: {
        backgroundColor: '#EB5757',
      },
    });
  };

  showSuccessFlashMsg = (alertOpts: GlobalAlertShowingOption) => {
    const { t } = this.props;
    showMessage({
      message: alertOpts.title || alertOpts.content || t('flashMsg.title_info'),
      description: alertOpts.title ? alertOpts.content : undefined,
      type: 'success',
      style: {
        backgroundColor: '#80BA93',
      },
    });
  };

  render() {
    const { loadingMsg } = this.state;
    return (
      <>
        <NormalLoading isLoading={this.state.isLoading} text={loadingMsg} />
        <NormalAlert ref={this.alertRef} />
        <FlashMessage
          titleStyle={{
            fontWeight: '600',
            ...Platform.select({
              android: {
                marginTop: moderateScale(20),
              },
              ios: {},
            }),
          }}
          position="top"
        />
      </>
    );
  }
}

// export const GloablUI = withTranslation()(GloablUIComp)
