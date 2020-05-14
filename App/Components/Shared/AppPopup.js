import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import AppText from './AppText';
import {updateAppState} from '../../Redux/appAction';
import CloseIcon from '../Custom/CloseIcon';
import useForm from '../../Hooks/Shared/useForm';

function AppPopup() {
  const {popUpModal, popUpTitle, popUpContent} = useSelector(state => state);
  const {updateForm, form} = useForm({});
  const dispatch = useDispatch();

  function hideModal() {
    dispatch(updateAppState('popUpModal', false));
  }

  function updatePopUpStateByKey(key, value) {
    const tempObj = {...popUpState};
    tempObj[key] = value;
    updatePopUpState(tempObj);
  }

  return (
    <Modal
      isVisible={popUpModal}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}>
      <View
        style={{
          padding: getPerfectSize(30),
          height: getPerfectSize(700),
          backgroundColor: Theme.white,
        }}>
        <CloseIcon onPress={hideModal} noConfirm />

        <View style={{height: getPerfectSize(70), justifyContent: 'center'}}>
          <AppText fontSize={30} bold>
            {popUpTitle}
          </AppText>
        </View>

        {popUpContent(form, updateForm)}
      </View>
    </Modal>
  );
}

export default AppPopup;
