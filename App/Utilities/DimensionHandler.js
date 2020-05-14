import {PREDEF_RES} from 'react-native-pixel-perfect';
import {Dimensions, StatusBar} from 'react-native';
const {height, width} = Dimensions.get('screen');
const CURRENT_RESOLUTION = Math.sqrt(height * height + width * width);

export const create = (designSize = PREDEF_RES.iphone6.px) => {
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width,
  );
  const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION;
  return size => RESOLUTIONS_PROPORTION * size;
};
let getPerfectSize = create();

export default getPerfectSize;
// export function getStatusbarHeight() {
//   return (StatusBar.currentHeight || 0) + 30;
// }

// export function Dimensions.get('screen').width {
//   return Dimensions.get('screen').width;
// }
