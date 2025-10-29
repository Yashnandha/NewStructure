import colors from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 21,
    fontFamily: font.poppinsBold,
  },
  indicatorStyle: {
    marginRight: 10,
  },
});
export default style;
