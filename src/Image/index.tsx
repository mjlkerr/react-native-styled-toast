import * as React from 'react'
import { ColorProps, SpaceProps } from 'styled-system'
import { Image, View } from 'react-native'
import { images } from'./assets/images';

export type ImageProps = SpaceProps &
  ColorProps & {
    name: string
    family: string
    color?: string
    size?: number
    testID?: string
  }

const CustomImage: React.FC<ImageProps> = (props) => {
  return (
    <View>
      <Image
        source={images.confetti}
        resizeMode='contain'
        style={[{ height: 25, width: 25 }]}
      />
    </View>
  )
}

export default CustomImage