import React, { memo } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { color, font } from '../../../theme';

interface NoDataObj {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  message?: string;
}
const NoDataFound = ({
  containerStyle,
  message = 'No Data Available',
}: NoDataObj) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.nodataLabel}>{message}</Text>
    </View>
  );
};

export default memo(NoDataFound);

const styles = StyleSheet.create({
  nodataLabel: {
    fontFamily: font.supremeRegular,
    fontSize: 15,
    color: color.black,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
