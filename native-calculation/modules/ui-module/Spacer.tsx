import { View } from 'react-native'
import { ReactNode, useMemo, memo } from 'react'

type SizerPropsType = {
  size: number
  children?: ReactNode
}

export const Spacer = memo(({ size, children }: SizerPropsType) => {
  const withChildren = useMemo(() => ({ padding: size}), [size])
  const noChildren = useMemo(() => ({ width: size, height: size }), [size])

  if (children) {
    return (
      <View style={withChildren}>
        {children}
      </View>
    )
  }

  return (
    <View style={noChildren} />
  )
})
