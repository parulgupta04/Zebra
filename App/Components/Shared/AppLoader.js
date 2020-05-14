import React from 'react';
import {ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import AppCenter from './AppCenter';
import Theme from '../../Config/Theme';

function AppLoader() {
  const {loadingModal} = useSelector(state => state);
  return (
    <Modal
      isVisible={loadingModal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <AppCenter allAxis>
        <ActivityIndicator color={Theme.primary} size={'large'} />
      </AppCenter>
    </Modal>
  );
}

export default AppLoader;
