import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE} from './types';

const appReducer = (
  state = {
    userType: '',
    userData: {}, //added
    loggedInStatus: null,
    loadingModal: false,
    popUpModal: false,
    appLanguage: 'en',
    popUpTitle: '',
    popUpContent: () => {},
    confirmModal: false,
    confirmTitle: '',
    confirmSubtitle: '',
    confirmAction: () => {},
  },
  action,
) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const {name, value} = action.payload;
      const newState = {...state, [name]: value};
      return newState;
    }
    case UPDATE_BULK_APP_STATE: {
      const {values} = action.payload;
      const newState = {...state, ...values};
      return newState;
    }
    default:
      return state;
  }
};

export default appReducer;
