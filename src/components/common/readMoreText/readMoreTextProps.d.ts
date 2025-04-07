import {Ref} from 'react';
import type {TextStyle, TextStyleAndroid, TextStyleIOS} from 'react-native';

interface ReadMoreTextProps {
  children?: React.JSX;
  /**
   *  @default 250
   *  @type number
   */
  readMoreWords?: number;
  style?: TextStyle | TextStyleAndroid | TextStyleIOS | ViewStyle;
  readMoreStyle?: TextStyle | TextStyleAndroid | TextStyleIOS | ViewStyle;
  ref?: Ref<ReadMoreTextMethods>;
}
interface ReadMoreTextMethods {
  readMore: () => void;
  readLess: () => void;
}
