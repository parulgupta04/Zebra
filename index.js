import {AppRegistry, PixelRatio} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';
import getPerfectSize from './App/Utilities/DimensionHandler';

console.log(getPerfectSize(20), PixelRatio.get());

AppRegistry.registerComponent(appName, () => App);
