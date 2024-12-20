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

  const abbrNum = (number: number, decPlaces: number = 2): string => {
    let orig: number = number;
    decPlaces = Math?.pow(10, decPlaces);
    const abbrev: string[] = ['k', 'm', 'b', 't', 'aa', 'ab', 'ac'];
    for (let i: number = abbrev.length - 1; i >= 0; i--) {
      const size: number = Math?.pow(10, (i + 1) * 3);
      if (size <= number) {
        number = Math?.round((number * decPlaces) / size) / decPlaces;
        if (number === 1000 && i < abbrev?.length - 1) {
          number = 1;
          i++;
        }
        let result: string = number?.toString() + abbrev[i];
        return result;
      }
    }
    return orig?.toString();
  };

export {
    hitSlops,
    timerTime,
    abbrNum,
    keyboardBehavior,
    activeOpacity

}