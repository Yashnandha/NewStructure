import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {ErrorComponentProps} from './errorComponentProps';
import styles from './errorComponent.style';

const ErrorComponent: FC<ErrorComponentProps> = props => {
  return (
    <View>
      {props?.error && (
        <Text style={[styles.errorText, props.errorTwo]}>{props?.error}</Text>
      )}
    </View>
  );
};

export default memo(ErrorComponent);
