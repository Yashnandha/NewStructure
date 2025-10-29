import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    marginTop: 5,
  },
  errorText: {
    includeFontPadding: false,
    fontFamily: font.poppinsMedium,
    fontSize: 12,
    color: color.red,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default styles;
