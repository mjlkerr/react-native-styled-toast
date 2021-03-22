import * as React from 'react'
import { ColorProps, SpaceProps } from 'styled-system'
import { Image, View } from 'react-native'
import images from '../Image/assets/images.js'

export type ImageProps = SpaceProps &
  ColorProps & {
    size: number
    testID?: string
  }

const CustomImage: React.FC<ImageProps> = (props) => {
  return (
    <View>
      <Image source={images.confetti} resizeMode="contain" style={[{ height: props.size, width: props.size }]} />
    </View>
  )
}

export default CustomImage

CustomImage.defaultProps = {
  size: 20
}
