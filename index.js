// @flow
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

type Props = {
  cardHeight: number,
  cardWidth: number,
  speed: number,
  borderRadius: number
}

const HEIGHT = Dimensions.get('screen').height
const WIDHT = Dimensions.get('screen').width

function ExpandableCard(props: Props) {
  const {
    cardHeight,
    cardWidth,
    speed = 2,
    borderRadius = 15
  } = props
  const [containerHeight] = useState(new Animated.Value(cardHeight))
  const [containerwidth] = useState(new Animated.Value(cardWidth))
  const [containerRadius] = useState(new Animated.Value(borderRadius))
  const [closeBtnHeight] = useState(new Animated.Value(0))
  const [closeBtnWidth] = useState(new Animated.Value(0))

  const expand = (): void => {
    Animated.parallel([
      Animated.spring(containerHeight, { toValue: HEIGHT, speed }),
      Animated.spring(containerwidth, { toValue: WIDHT, speed }),
      Animated.timing(containerRadius, { toValue: 40 }),
      Animated.timing(closeBtnHeight, { toValue: 40, duration: 200 }),
      Animated.timing(closeBtnWidth, { toValue: 40, duration: 200 }),
    ]).start()
  }

  const contract = (): void => {
    Animated.parallel([
      Animated.spring(containerHeight, { toValue: cardHeight, speed: speed + 1 }),
      Animated.spring(containerwidth, { toValue: cardWidth, speed: speed + 1 }),
      Animated.timing(containerRadius, { toValue: borderRadius }),
      Animated.timing(closeBtnHeight, { toValue: 0, duration: 200 }),
      Animated.timing(closeBtnWidth, { toValue: 0, duration: 200 }),
    ]).start()
  }

  return (
    <View>
      <Animated.View
        style={{
          height: closeBtnHeight,
          width: closeBtnWidth,
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 100,
        }}
      >
        <TouchableOpacity style={styles.closeCircle} onPress={contract}>

        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity activeOpacity={0.8} onPress={expand}>
        <Animated.View
          style={[
            styles.container,
            {
              height: containerHeight,
              width: containerwidth,
              borderRadius: containerRadius
            }
          ]}
        >

        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 300,
    width: 250,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: { height: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.1
  },
  closeCircle: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    width: '100%',
    borderRadius: 100,
    zIndex: 100,
  }
})

export default ExpandableCard
