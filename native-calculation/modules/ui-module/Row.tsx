import { View, StyleSheet } from 'react-native'
import { memo } from 'react'

export const Row = memo(({ children }) => <View style={styles.rowWrapper}>{children}</View>)

const styles = StyleSheet.create({
  rowWrapper: { flexDirection: 'row', alignItems: 'center' },
})
