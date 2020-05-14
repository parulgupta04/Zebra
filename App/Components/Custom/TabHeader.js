import React from 'react';
import {Header, Body, Icon, Right} from 'native-base';
import {AppText} from '..';
import Theme from '../../Config/Theme';
import {useSelector, useDispatch} from 'react-redux';
import getPerfectSize from '../../Utilities/DimensionHandler';

function TabHeader(props) {
  const {heading} = props;
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
      <Body>
        <AppText bold fontSize={40} inverted>
          {heading}
        </AppText>
      </Body>

      <Right>
        <Icon
          name={'md-share'}
          fontSize={32}
          style={{color: Theme.white}}></Icon>
      </Right>
    </Header>
  );
}

export default TabHeader;
