import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  btnContainer: {
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '100%',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBtnContainer: {
    height: 40,
    flexDirection: 'row',
    position: 'absolute',
    overflow: 'hidden',
  },
  animatedBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: font.poppinsMedium,
    fontSize: 14,
    lineHeight: 20,
  },
  btnTextInActive: {
    color: '#000',
    fontFamily: font.poppinsRegular,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
