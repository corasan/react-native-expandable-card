// // @flow
// import React, { useState } from 'react'
// import {
//   View,
//   StyleSheet,
//   Animated,
//   TouchableOpacity,
//   Dimensions,
//   SafeAreaView,
//   Text,
//   TouchableHighlight
// } from 'react-native'

// type Props = {
//   cardHeight: number,
//   cardWidth: number,
//   speed: number,
//   borderRadius: number,
//   containerStyles: {},
//   contentContainerStyles: {},
//   contentComponent: React.ComponentType<any>,
//   headerContainerStyles: {},
//   headerContentComponent: React.ComponentType<any>,
// }

// const HEIGHT = Dimensions.get('screen').height
// const WIDHT = Dimensions.get('screen').width

// function ExpandableCard(props: Props) {
//   const {
//     cardHeight,
//     cardWidth,
//     speed = 3,
//     borderRadius = 15,
//     containerStyles,
//     contentContainerStyles,
//     contentComponent,
//     headerContainerStyles,
//     headerContentComponent
//   } = props
//   const [containerHeight] = useState(new Animated.Value(cardHeight))
//   const [containerWidth] = useState(new Animated.Value(cardWidth))
//   const [containerRadius] = useState(new Animated.Value(borderRadius))
//   const [closeBtnOpacity] = useState(new Animated.Value(0))
//   const [contentDisplay] = useState(new Animated.Value(0))
//   const [buttonDisabled, setButtonDisable] = useState(false)
//   const [contentHeight] = useState(new Animated.Value(0))
//   const [bottomContainerHeight] = useState(new Animated.Value(0))

//   const expand = (): void => {
//     setButtonDisable(true)
//     Animated.parallel([
//       Animated.spring(containerHeight, { toValue: HEIGHT, speed }),
//       Animated.spring(containerWidth, { toValue: WIDHT, speed }),
//       Animated.timing(containerRadius, { toValue: 40 }),
//       Animated.timing(closeBtnOpacity, { toValue: 1, duration: 200 }),
//       Animated.timing(contentHeight, { toValue: 300, duration: 100 }),
//       Animated.timing(bottomContainerHeight, { toValue: 0, duration: 300 })
//     ]).start()
//   }

//   const contract = (): void => {
//     setButtonDisable(false)
//     Animated.parallel([
//       Animated.spring(containerHeight, { toValue: cardHeight, speed: speed + 1 }),
//       Animated.spring(containerWidth, { toValue: cardWidth, speed: speed + 1 }),
//       Animated.timing(containerRadius, { toValue: borderRadius }),
//       Animated.timing(closeBtnOpacity, { toValue: 0, duration: 200 }),
//       Animated.timing(contentHeight, { toValue: 0, duration: 300 }),
//     ]).start()
//   }

//   const animatedContentHeight = contentHeight.interpolate({
//     inputRange: [0, 0.25, 0.5, 0.75, 1],
//     outputRange: ['0%','25%', '50%', '75%', '100%']
//   });

//   // bottomContainerHeight

//   const animatedContainerStyles = {
//     height: containerHeight,
//     width: containerWidth,
//     borderRadius: containerRadius
//   }

//   return (
//     <Animated.View style={[styles.container, animatedContainerStyles, containerStyles]}>
//       <TouchableOpacity style={{ height: '100%', width: '100%' }} onPress={expand} disabled={buttonDisabled}>
//         <Animated.View
//           style={[
//             styles.header,
//             {
//               borderTopLeftRadius: containerRadius,
//               borderTopRightRadius: containerRadius
//             },
//             headerContainerStyles
//           ]}
//         >
//           <Animated.View style={[styles.closeCircle, { opacity: closeBtnOpacity }]}>
//             <TouchableOpacity
//               onPress={contract}
//               disabled={!buttonDisabled}
//               style={styles.closeBtn}
//             >
//               <Text style={{ color: 'white' }}>X</Text>
//             </TouchableOpacity>
//           </Animated.View>
//           {headerContentComponent}
//         </Animated.View>

//         <Animated.View style={[styles.initialViewContent, { height: bottomContainerHeight }]}>
//           <Text>Hello</Text>
//         </Animated.View>

//         <Animated.View style={[styles.content, { height: animatedContentHeight }, contentContainerStyles]}>
//           {contentComponent}
//         </Animated.View>
//       </TouchableOpacity>
//     </Animated.View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     shadowColor: 'black',
//     shadowOffset: { height: 0, height: 0 },
//     shadowRadius: 6,
//     shadowOpacity: 0.1
//   },
//   closeCircle: {
//     position: 'absolute',
//     top: 30,
//     right: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     height: 40,
//     width: 40,
//     borderRadius: 100,
//     zIndex: 100,
//   },
//   // header: {
//   //   width: '100%',
//   //   height: 200,
//   //   backgroundColor: 'rgba(255, 255, 100, 0.4)'
//   // },
//   content: {
//     width: '100%',
//     paddingHorizontal: 30
//   },
//   closeBtn: {
//     height: '100%',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   initialViewContent: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })

// export default ExpandableCard
