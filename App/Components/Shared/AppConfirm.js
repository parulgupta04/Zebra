import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import AppCenter from './AppCenter';
import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {Row, Col} from 'native-base';
import AppText from './AppText';
import {updateAppState} from '../../Redux/appAction';
import CloseIcon from '../Custom/CloseIcon';
import AppSpacer from './AppSpacer';
import {RoundedButton} from '..';
import AppPadding from './AppPadding';

function AppConfirm() {
  const {
    confirmModal,
    confirmTitle,
    confirmSubtitle,
    confirmAction,
  } = useSelector(state => state);
  const dispatch = useDispatch();

  function hideModal() {
    dispatch(updateAppState('confirmModal', false));
  }

  function confirmActionFunction() {
    confirmAction();
    hideModal();
  }

  return (
    <Modal
      isVisible={confirmModal}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View
        style={{
          height: getPerfectSize(500),
          backgroundColor: Theme.white,
        }}>
        <AppPadding size={30} horizontal flex={1}>
          <CloseIcon noConfirm onPress={hideModal} />

          <View style={{height: getPerfectSize(70), justifyContent: 'center'}}>
            <AppText bold fontSize={30}>
              {confirmTitle}
            </AppText>
          </View>
          <AppCenter allAxis>
            <AppSpacer size={50} />
            <AppText color={Theme.shadeGrey} fontSize={24}>
              {confirmSubtitle}
            </AppText>
          </AppCenter>
          <AppSpacer size={100} />
          <Row>
            <Col size={45}>
              <RoundedButton
                title={'CANCEL'}
                dark
                smallTitle
                onPress={hideModal}
              />
            </Col>
            <Col size={10} />
            <Col size={45}>
              <RoundedButton
                title={'YES'}
                smallTitle
                onPress={confirmActionFunction}
              />
            </Col>
          </Row>
        </AppPadding>
      </View>
    </Modal>
  );
}

export default AppConfirm;
