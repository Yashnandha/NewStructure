import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './switchTab.style';

const Button = ({
  data,
  onClick,
  activeColor,
  inactiveColor,
  onButtonPress,
}: animatedButtonProps) => {
  const [btnContainerWidth, setWidth] = useState(0);
  const btnWidth = btnContainerWidth / data.length;
  const translateX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  const animatedBtnStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: interpolate(translateX.value, [0, 1], [1, 0]) }],
  }));

  const onPress = (i: number) => {
    onClick(i + 1);
    onButtonPress?.(i + 1);
    // translateX.value = withSpring(i * btnWidth, {stiffness: 80});
    translateX.value = withTiming(i * btnWidth, {
      duration: 300,
    });
  };

  return (
    <View
      style={[
        styles.btnContainer,
        {
          backgroundColor: inactiveColor,
        },
      ]}
      onLayout={e => setWidth(e.nativeEvent.layout.width)}
    >
      {data.map((btn, i) => (
        <TouchableOpacity
          key={btn}
          style={styles.btn}
          onPress={() => {
            onPress(i);
          }}
        >
          <Text numberOfLines={1} style={styles.btnTextInActive}>
            {btn}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.animatedBtnContainer,
          { width: btnWidth },
          animatedStyle,
          {
            backgroundColor: activeColor,
          },
        ]}
      >
        {data.map(btn => (
          <Animated.View
            key={btn}
            style={[styles.animatedBtn, { width: btnWidth }, animatedBtnStyle]}
          >
            <Text numberOfLines={1} style={styles.btnTextActive}>
              {btn}
            </Text>
          </Animated.View>
        ))}
      </Animated.View>
    </View>
  );
};

const SwitchTab: FC<SwitchTabProps> = ({
  data = ['Button1', 'Button2'],
  activeColor = '#444',
  inactiveColor = '#00000011',
  onPress,
}) => {
  const [active, setActive] = useState(1);
  return (
    <View style={[styles.container]}>
      <Button
        data={data}
        onClick={setActive}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        onButtonPress={onPress}
      />
    </View>
  );
};

export default SwitchTab;
