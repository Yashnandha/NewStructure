// utils/selectImage.ts
import {
  differenceInDays,
  differenceInMilliseconds,
  format,
  formatDistanceToNowStrict,
  parseISO,
} from 'date-fns';

import moment from 'moment';
import {Dimensions, Platform} from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
const activeOpacity = 0.7;

const behavior = 'padding';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const itemWidth = Dimensions.get('window').width / 2 - 16;
const timeFormat = 'hh:mm A';
const dateFormate = 'DD/MM/YYYY';
const uploadDateFormate = 'YYYY-MM-DD';
const bottomTabIconWidth = 25;

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
  } else {
    return `${h}:${m}:${s}`;
  }
};

const maskMobile = (mobile: string) => {
  if (!mobile) return '';
  return mobile.slice(0, 3) + '*****' + mobile.slice(-2);
};

const selectImage = async (
  source: 'camera' | 'gallery',
  fallbackNamePrefix = 'image',
): Promise<{uri: string; name: string; type: string} | null> => {
  const options: ImageLibraryOptions & CameraOptions = {
    mediaType: 'photo',
    quality: 0.8,
    includeBase64: false,
    selectionLimit: 1,
  };

  try {
    const result =
      source === 'camera'
        ? await launchCamera(options)
        : await launchImageLibrary(options);

    if (result.didCancel) {
      console.log('User cancelled image picker');
      return null;
    }

    if (result.errorCode) {
      console.error('ImagePicker Error: ', result.errorMessage);
      return null;
    }

    const asset = result.assets?.[0];
    if (!asset?.uri) {
      console.warn('Invalid image asset');
      return null;
    }

    const originalFileName =
      asset.fileName ??
      asset.uri.split('/').pop() ??
      `${fallbackNamePrefix}.jpg`;
    const extension = originalFileName.split('.').pop()?.toLowerCase();

    const mimeTypeMap: Record<string, string> = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
      heic: 'image/heic',
    };

    const type = mimeTypeMap[extension || ''] || 'image/jpeg';
    const fileName = `${fallbackNamePrefix}_${moment().format(
      'YYYYMMDD_HHmmss',
    )}.${extension || 'jpg'}`;

    const uri =
      Platform.OS === 'ios' ? asset.uri.replace('file://', '') : asset.uri;

    return {
      uri,
      name: fileName,
      type,
    };
  } catch (error) {
    console.error('Unexpected error while selecting image:', error);
    return null;
  }
};

const htmlTextToText = (html: string): string => {
  if (!html) {
    return '';
  }
  const text = html
    .replace(/<[^>]+>/g, '') // Remove all HTML tags
    .replace(/<br[^>]*>/g, '\n') // Replace <br> with newline
    .replace(/@/g, '')
    .replace(/@/g, ''); // Remove the initial "@" from @mentions

  return text || '';
};

const getDiffInSeconds = (isoDate: string): number => {
  const givenDate = parseISO(isoDate);
  const now = new Date();
  return differenceInMilliseconds(now, givenDate) / 1000;
};

const formatTimestamp = (timestamp: string) => {
  const date = parseISO(timestamp);
  const daysDiff = differenceInDays(new Date(), date);

  if (daysDiff < 1) {
    return formatDistanceToNowStrict(date, {addSuffix: true});
  } else if (daysDiff <= 7) {
    return formatDistanceToNowStrict(date, {addSuffix: true});
  } else {
    return format(date, 'MMM dd, yyyy');
  }
};

const abbrNum = (
  num: number,
  decPlaces: number = 2,
  minValue = 100000,
): string => {
  const abbrev = ['k', 'm', 'b', 't', 'aa', 'ab', 'ac'];
  const factor = Math.pow(10, decPlaces);
  if (num < minValue) return num.toString();
  for (let i = abbrev.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3);
    if (num >= size) {
      const newNum = Math.floor((num * factor) / size) / factor;
      return newNum.toString() + abbrev[i];
    }
  }
  return num.toString();
};

export {
  abbrNum,
  activeOpacity,
  behavior,
  bottomTabIconWidth,
  dateFormate,
  deviceHeight,
  deviceWidth,
  formatTimestamp,
  getDiffInSeconds,
  htmlTextToText,
  itemWidth,
  maskMobile,
  selectImage,
  timeFormat,
  timerTime,
};
