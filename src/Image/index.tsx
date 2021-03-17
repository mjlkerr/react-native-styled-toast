import * as React from 'react'
import { ColorProps, SpaceProps } from 'styled-system'
import { Text } from 'react-native'

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