import React, {Fragment} from 'react';

function AppVisibilityToggle({visible, children}) {
  const status = visible ? true : false;
  return status ? children : <Fragment />;
}

export default AppVisibilityToggle;
