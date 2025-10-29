import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface SwitchProps {
  isOn: boolean;
  onToggle: (val: boolean) => void;
  circleColor?: string;
  onColor?: string;
  offColor?: string;
  width?: number;
  height?: number;
}

const CustomSwitch = ({
  isOn,
  onToggle,
  circleColor = '#fff',
  onColor = '#F2A737',
  offColor = '#dcdde1',
  width = 50,
  height = 25,
}: SwitchProps) => {
  const circleSize = height - 4;
  const translateX = useSharedValue(isOn ? width - height : 0);
  const [toggle, setToggle] = useState(isOn);

  useEffect(() => {
    // On prop change (external update), reflect position instantly (no animation)
    setToggle(isOn);
    translateX.value = isOn ? width - height : 0;
  }, [isOn]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleToggle = () => {
    const newValue = !toggle;
    setToggle(newValue);
    cancelAnimation(translateX); // ⛔ Cancel any in-progress animation
    translateX.value = withTiming(newValue ? width - height : 0, {
      duration: 200,
    });
    onToggle(newValue);
  };

  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <View
        style={[
          {
            width,
            height,
            borderRadius: height / 2,
            backgroundColor: toggle ? onColor : offColor,
            padding: 2,
            justifyContent: 'center',
          },
        ]}
      >
        <Animated.View
          style={[
            {
              width: circleSize,
              height: circleSize,
              borderRadius: circleSize / 2,
              backgroundColor: circleColor,
            },
            animatedStyle,
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitch;
