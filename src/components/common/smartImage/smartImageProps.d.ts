import type { ImageProps } from 'react-native';

interface SmartImageProps extends ImageProps {
  placeholder?: ImageSourcePropType | JSX.Element;
  blurhashProps?: {
    decodeWidth?: number;
    decodeHeight?: number;
    decodePunch?: number;
  };
  fadeDuration?: number;
}
