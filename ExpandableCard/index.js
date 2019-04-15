// @flow
import React, { Component } from 'react'
import {
  View,
  Animated,
  Dimensions,
  StyleSheet
} from 'react-native'

import styles from './styles'

type Props = {

}

type State = {
  translateY: Animated.Value,
  translateX: Animated.Value
}

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const { Value } = Animated

class ExpandableCard extends Component<Props, State> {
  state = {
    translateY: new Value(0),
    translateX: new Value(200)
  }

  componentDidMount() {
    this.expand()
  }

  expand = () => {
    const { translateX } = this.state
    Animated.parallel([
      Animated.spring(translateX, { toValue: 0 })
    ])
  }

  render() {
    return (
      <Animated.View style={styles.container}>
        
      </Animated.View>
    )
  }
}

export default ExpandableCard
