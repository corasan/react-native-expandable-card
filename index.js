// @flow
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Text,
  TouchableHighlight
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
  const [containerWidth] = useState(new Animated.Value(cardWidth))
  const [containerRadius] = useState(new Animated.Value(borderRadius))
  const [closeBtnOpacity] = useState(new Animated.Value(0))
  const [contentDisplay] = useState(new Animated.Value(0))
  const [buttonDisabled, setButtonDisable] = useState(false)
  const [contentHeight] = useState(new Animated.Value(0))

  const expand = (): void => {
    setButtonDisable(true)
    Animated.parallel([
      Animated.spring(containerHeight, { toValue: HEIGHT, speed }),
      Animated.spring(containerWidth, { toValue: WIDHT, speed }),
      Animated.timing(containerRadius, { toValue: 40 }),
      Animated.timing(closeBtnOpacity, { toValue: 1, duration: 200 }),
      Animated.timing(contentHeight, { toValue: 300, duration: 300 }),
    ]).start()
  }

  const contract = (): void => {
    setButtonDisable(false)
    Animated.parallel([
      Animated.spring(containerHeight, { toValue: cardHeight, speed: speed + 1 }),
      Animated.spring(containerWidth, { toValue: cardWidth, speed: speed + 1 }),
      Animated.timing(containerRadius, { toValue: borderRadius }),
      Animated.timing(closeBtnOpacity, { toValue: 0, duration: 200 }),
      Animated.timing(contentHeight, { toValue: 0, duration: 200 }),
    ]).start()
  }

  const animatedContentHeight = contentHeight.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['0%','25%', '50%', '75%', '100%']
  });

  const containerStyles = {
    height: containerHeight,
    width: containerWidth,
    borderRadius: containerRadius
  }

  return (
    <Animated.View style={[styles.container, containerStyles]}>
      <TouchableOpacity style={{ height: '100%', width: '100%' }} onPress={expand} disabled={buttonDisabled}>
        <Animated.View style={[styles.header, { borderTopLeftRadius: containerRadius, borderTopRightRadius: containerRadius }]}>
          <Animated.View style={[styles.closeCircle, { opacity: closeBtnOpacity }]}>
            <TouchableOpacity
              onPress={contract}
              disabled={!buttonDisabled}
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ color: 'white' }}>X</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>

        <Animated.View style={[styles.content, { height: animatedContentHeight }]}>
          <Text>Something here</Text>

        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
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
    top: 30,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 40,
    width: 40,
    borderRadius: 100,
    zIndex: 100,
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: 'red'
  },
  content: {
    width: '100%',
    backgroundColor: 'blue',
  }
})

export default ExpandableCard
