import React from 'react';
import AppCircle from '../Shared/AppCircle';
import {Icon} from 'native-base';
import {useDispatch} from 'react-redux';
import Theme from '../../Config/Theme';
import {AppCenter} from '..';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {updateBulkAppState} from '../../Redux/appAction';

function CloseIcon({style, onPress, noConfirm}) {
  const appliedStyle = {
    position: 'absolute',
    right: -getPerfectSize(20),
    top: -getPerfectSize(20),
    zIndex: 20,
  };
  const dispatch = useDispatch();

  function confirmOnPress() {
    if (noConfirm) {
      onPress();
    } else {
      dispatch(
        updateBulkAppState({
          confirmTitle: 'Delete Image',
          confirmSubtitle: 'Are you sure, clicking yes will delete this image.',
          confirmModal: true,
          confirmAction: onPress,
        }),
      );
    }
  }

  return (
    <AppCircle
      style={style || appliedStyle}
      size={50}
      backgroundColor={Theme.primary}>
      <AppCenter allAxis>
        <Icon
          name={'close'}
          onPress={confirmOnPress}
          style={{color: Theme.white}}></Icon>
      </AppCenter>
    </AppCircle>
  );
}

export default CloseIcon;
