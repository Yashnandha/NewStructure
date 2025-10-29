import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface ErrorComponentProps {
  error?: string;
  errorTwo?: StyleProp<TextStyle> | undefined;
}
