import { View, StyleSheet, ScrollView } from 'react-native'
import { memo, ReactNode, useMemo } from 'react'

import { COLOR } from '@weirdo/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type GeneralLayoutPropsType = {
  children: ReactNode
  centered?: boolean
  noTop?: boolean
  noScrollView?: boolean
}

export const GeneralLayout = memo(({ children, centered, noTop, noScrollView }: GeneralLayoutPropsType) => {
  const isDark = false // TODO: integrate with other providers
  const { top, bottom, left, right } = useSafeAreaInsets()

  const finalStyle = useMemo(() => [
    isDark ? styles.containerDark : styles.containerLight,
    {
      paddingTop: noTop ? 0 : top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    },
    noScrollView && centered ? styles.centered : undefined,
  ], [isDark, top, bottom])

  if (noScrollView) {
    return (
      <View style={finalStyle}>
        {children}
      </View>
    )
  }

  return (
    <ScrollView style={finalStyle} contentContainerStyle={centered ? styles.centered : undefined}>
      {children}
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  containerDark: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.GREY_DARK,
  },
  containerLight: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.WHITE,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
