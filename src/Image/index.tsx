import React, { FC } from 'react';
import { color, ColorProps, space, SpaceProps } from 'styled-system'
import { Image, Text } from 'react-native'

export type ImageProps = SpaceProps &
  ColorProps & {
    name: string
    family: string
    color?: string
    size: number
    testID?: string
  }

const CustomImage: React.FC<ImageProps> = (props) => {
  return <Text>hi</Text>
}

export default CustomImage