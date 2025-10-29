import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

type RatingStarsProps = {
  totalStars?: number;
  currentValue: number | string;
  onChange?: (value: string | number) => void;
  filledStar?: ImageSourcePropType;
  blankStar?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  starImageStyle?: StyleProp<ImageStyle>;
  starWrapperStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  allowFractionalFill?: boolean;
};
