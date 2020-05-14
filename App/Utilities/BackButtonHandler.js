import {BackHandler} from 'react-native';
import ToastHandler from './ToastHandler';

class BackButtonHandler {
  counter = 0;
  handleBackButtonStart;
  handleBackButtonStop;

  mount(back, navigation, callBack) {
    this.addBackButtonListeners(back, navigation, callBack);
  }

  addBackButtonListeners(back, navigation, callBack) {
    this.handleBackButtonStart = navigation.addListener('didFocus', () => {
      this.counter = 0;
      BackHandler.addEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation, callBack),
      );
    });

    this.handleBackButtonStop = navigation.addListener('willBlur', () => {
      this.counter = 0;
      BackHandler.removeEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation, callBack),
      );
    });
  }

  onBackButtonPressAndroid = (back, navigation, callBack) => {
    if (callBack) {
      callBack();
      return true;
    } else {
      if (back) {
        navigation.goBack();
        return true;
      }
      if (this.counter > 0) {
        BackHandler.exitApp();
      } else {
        setTimeout(() => {
          this.counter = 0;
        }, 3000);
        this.counter++;
        ToastHandler.normalToast('Press again to exit.');
        return true;
      }
    }
  };

  unmount() {
    this.removeBackButtonListeners();
  }

  removeBackButtonListeners() {
    this.handleBackButtonStart && this.handleBackButtonStart.remove();
    this.handleBackButtonStop && this.handleBackButtonStop.remove();
  }
}

export default new BackButtonHandler();
