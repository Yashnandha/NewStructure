import imageIndex from '@imageIndex';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './ratingStars.style';
import { RatingStarsProps } from './ratingStarsProps';

const RatingStars: React.FC<RatingStarsProps> = ({
  totalStars = 5,
  currentValue = 0,
  onChange,
  filledStar = imageIndex.fillStar,
  blankStar = imageIndex.star,
  containerStyle,
  starImageStyle,
  starWrapperStyle,
  disabled = false,
  allowFractionalFill = false,
}) => {
  const currentRating = Number(currentValue);

  return (
    <View style={[styles.ratingStarStyle, containerStyle]}>
      {Array.from({ length: totalStars }).map((_, index) => {
        const starPosition = index + 1;
        let fillPercent = 0;
        if (!allowFractionalFill) {
          fillPercent = currentRating >= starPosition ? 100 : 0;
        } else {
          if (currentRating >= starPosition) {
            fillPercent = 100;
          } else if (currentRating > index && currentRating < starPosition) {
            fillPercent = (currentRating - index) * 100;
          } else {
            fillPercent = 0;
          }
        }

        return (
          <Pressable
            key={index}
            style={[styles.startContainer, starWrapperStyle]}
            onPress={() => onChange?.(starPosition)}
            disabled={disabled}
          >
            <Image
              style={[styles.starImage, starImageStyle]}
              source={blankStar}
              resizeMode="contain"
            />

            {/* fractional/filled overlay */}
            {fillPercent > 0 && (
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: `${fillPercent}%`,
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  style={[styles.starImage, starImageStyle]}
                  source={filledStar}
                  resizeMode="contain"
                />
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default RatingStars;
