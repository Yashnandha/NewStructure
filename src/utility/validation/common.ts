import {Platform} from 'react-native';

const keyboardBehavior = Platform.OS == 'ios' ? 'padding' : undefined;
const activeOpacity = 0.7;
const hitSlops = {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
  };

  const timerTime = (e: number) => {
    const h = Math.floor(e / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(e % 60)
      .toString()
      .padStart(2, '0');
  
    if (h == '00') {
      return `${m}:${s}`;
    } else if (m == '00') {
      return `${h}:${s}`;
    } else {
      return `${h}:${m}:${s}`;
    }
  };

export {
    hitSlops,
    timerTime,
    keyboardBehavior,
    activeOpacity

}