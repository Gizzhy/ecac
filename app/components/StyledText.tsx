
import React from 'react';
import { Text, TextProps } from 'react-native';

export default function TText(props: TextProps) {
  return <Text {...props} className={`font-montserrat ${props.className || ''}`} />;
}
