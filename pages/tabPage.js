import UpRisingModal from '../component/Show'
import { H, W } from '../utils/units'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function TabOneScreen() {
  const handleClose = () => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.map}></View>
      <View style={styles.drop}>
        <UpRisingModal visible={true} animate={true} onClose={handleClose} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    position: 'relative',
  },
  map: {
    width: W,
    height: H,
    backgroundColor: 'purple'
  },
  drop: {
    position: 'absolute',
    bottom: 0,
    height: 0.75 * H,
  }
})

export default TabOneScreen