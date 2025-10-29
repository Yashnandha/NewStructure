import Snackbar from 'react-native-snackbar';

export const Toast = (
  text: string,
  backgroundColor: string = '#000000',
  duration: number = 3000,
  textColor?: string,
) => {
  return Snackbar.show({
    text: text.toString(),
    backgroundColor: backgroundColor,
    duration: duration,
    numberOfLines: 5,
    textColor: textColor,
  });
};
