import imageIndex from '@imageIndex';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { SmartImageProps } from './smartImageProps';

const SmartImage: React.FC<SmartImageProps> = ({
  source,
  placeholder = imageIndex.noImage,
  blurhashProps,
  fadeDuration = 300,
  style,
  ...rest
}) => {
  const [error, setError] = useState(false);

  return (
    <>
      {error && <Image source={placeholder} style={[style]} {...rest} />}
      {!error && (
        <Image
          source={source}
          onError={() => {
            setError(true);
          }}
          style={[style]}
          {...rest}
        />
      )}
    </>
  );
};

export default SmartImage;
