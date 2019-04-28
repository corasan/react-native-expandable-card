// @flow
import React, { Component } from 'react'
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'

import styles from './styles'

type Props = {
  height: number,
}

type State = {
  translateY: Animated.Value,
  translateX: Animated.Value
}

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const { Value, parallel, spring } = Animated

class ExpandableCard extends Component<Props, State> {
  height: Animated.Value

  constructor(props: Props) {
    super(props)
    console.log(props)
    this.height = new Value(props.height)
    this.width = new Value(WIDTH - 30)
  }

  expand = () => {
    const { height, width } = this
    parallel([
      spring(height, { toValue: HEIGHT }),
      spring(width, { toValue: WIDTH }),
    ]).start()
  }

  render() {
    const { height, width } = this
    const animatedStyles = {
      height,
      width
    }

    return (
      <Animated.View style={[styles.container, animatedStyles]}>
        <TouchableWithoutFeedback onPress={this.expand}>
          <View style={{ height: '100%', width: '100%' }} />
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}

export default ExpandableCard
