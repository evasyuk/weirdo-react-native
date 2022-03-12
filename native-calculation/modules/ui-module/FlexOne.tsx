import { memo, ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

type FlexOnePropsType = {
  children: ReactNode
  fullSize?: boolean
}

export const FlexOne = memo(({ children, fullSize }: FlexOnePropsType) => (
  <View style={fullSize ? styles.fullSizeWrapper : styles.wrapper}>
    {children}
  </View>
))

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  fullSizeWrapper: {
    width: '100%',
    height: '100%',
    flex: 1,
  }
})
