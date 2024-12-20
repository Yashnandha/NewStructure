import React, { memo } from "react";
import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { propType } from "./customStatusbarProps";
import color from "@theme/color";

const CustomStatusBar: React.FC<propType> = ({
  backgroundColor = color.white,
  barStyle = "dark-content",
  ...props
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        { height: insets.top, backgroundColor: backgroundColor },
        props.containerStyle,
      ]}
    >
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={props.translucent}
        hidden={props.hidden}
        {...props}
      />
    </View>
  );
};

export default memo(CustomStatusBar);
