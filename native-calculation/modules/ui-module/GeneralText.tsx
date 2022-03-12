import { Text, StyleSheet } from 'react-native'
import { useMemo, memo } from 'react'

import { COLOR } from '@weirdo/theme'

type GeneralText = {
  children: string | string[]
  size?: number
}

export const GeneralText = memo(({ children, size }: GeneralText) => {
  const isDark = false // TODO: finish integration

  const finalStyle = useMemo(() =>
    [isDark ? styles.textDark : styles.textLight, size ? { fontSize: size } : {}],
  [isDark, size]
  )

  if (!children) {
    return null
  }

  return (
    <Text style={finalStyle}>{children}</Text>
  )
})

const styles = StyleSheet.create({
  textDark: { color: COLOR.GREY_LIGHT },
  textLight: { color: COLOR.BLACK },
})
