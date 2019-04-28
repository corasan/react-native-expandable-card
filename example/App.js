/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import ExpandableCard from './node_modules/react-native-expandable-card/ExpandableCard'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ExpandableCard
          height={400}
          cardWidth={280}
          contentComponent={<Text>{content}</Text>}
          headerContentComponent={<View style={{ backgroundColor: 'rgb(255,230,231)', height: 320, width: '100%' }} />}
          headerContainerStyles={{
            height: 300,
            width: '100%',
            backgroundColor: 'rgb(255,140,140)',
          }}
        />
      </View>
    );
  }
}

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit massa in facilisis gravida. Curabitur quis elementum elit. Curabitur in erat leo. Duis ullamcorper placerat magna. Etiam nec purus eget purus sodales ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ultricies metus libero, nec blandit dolor dapibus at. Nulla in libero mauris. Nulla sit amet imperdiet massa. Nam id diam diam.

Quisque sit amet nibh ut nibh semper interdum mollis in turpis. Integer id leo metus. Etiam augue est, ornare quis mollis aliquam, iaculis vitae dui. Nam orci ipsum, mollis vitae justo porta, aliquet bibendum tortor. Curabitur quis finibus orci, at consectetur lacus. Suspendisse ac euismod ex, ac sollicitudin neque. Duis dictum libero vel est fringilla, in placerat lacus blandit. Praesent non eros id nibh pulvinar facilisis. Sed tempus elementum ipsum. Maecenas pulvinar odio id maximus lacinia. Nunc vitae congue dui, non mattis dui. Morbi luctus, felis vulputate viverra laoreet, lorem nisi ullamcorper risus, sit amet iaculis ligula odio vel nulla. Proin sit amet fringilla quam, sit amet eleifend lectus. Praesent hendrerit augue sed risus porta, sed dignissim tortor malesuada. Aenean pellentesque est urna, vel euismod enim sollicitudin vel. Suspendisse potenti.

Mauris et maximus eros, ut ultrices erat. Phasellus congue elit nec augue placerat, quis dapibus leo convallis. Sed commodo tincidunt ante, non condimentum erat finibus nec. Duis sollicitudin risus eu velit congue, sit amet laoreet arcu vehicula. Duis hendrerit, neque sed lobortis mattis, lacus lacus ultricies lectus, et consequat risus mauris vel ipsum. Etiam finibus interdum risus dictum mollis. Suspendisse augue urna, pulvinar volutpat diam et, fringilla faucibus lectus.`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    // ...StyleSheet.absoluteFillObject
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
