import React from 'react';
import {Left, Header, Icon, Body} from 'native-base';
import {AppText} from '..';
import Theme from '../../Config/Theme';
import {useSelector, useDispatch} from 'react-redux';
import getPerfectSize from '../../Utilities/DimensionHandler';

function Screenheader(props) {
  const {title, goBack} = props;
  const appState = useSelector(state => state);
  const {appLanguage} = appState;

  return (
    <Header
      androidStatusBarColor={Theme.primary}
      style={{
        backgroundColor: Theme.primary,
        direction: appLanguage === 'ar' ? 'rtl' : 'ltr',
        height: getPerfectSize(130),
      }}>
      <Left style={{flex: 1.5, paddingLeft: 10}}>
        <Icon
          name="md-arrow-back"
          fontSize={32}
          onPress={goBack}
          style={{
            color: Theme.white,
            transform: [{rotate: appLanguage === 'ar' ? '180deg' : '0deg'}],
          }}></Icon>
      </Left>
      <Body style={{flex: 10}}>
        <AppText bold fontSize={40} inverted>
          {title}
        </AppText>
      </Body>
    </Header>
  );
}

export default Screenheader;
