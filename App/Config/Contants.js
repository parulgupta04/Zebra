import {Platform} from 'react-native';

export const FONT_FAMILY_REGULAR =
  Platform.OS === 'ios' ? 'Swiss721BT-Roman' : 'Swiss721 BT Roman';
export const FONT_FAMILY_BOLD =
  Platform.OS === 'ios' ? 'Swiss721BT-Bold' : 'Swis721 BT Bold';
// export const BASE_URL = 'http://spicaworks.com.md-94.webhostbox.net/zebra';
export const BASE_URL =
  'http://spicaworks.com.md-94.webhostbox.net/zebra_staging';
export const API_URL = `${BASE_URL}/api/V1`;
