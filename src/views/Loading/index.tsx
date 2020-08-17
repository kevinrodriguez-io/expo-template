import React from 'react'
import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components'
import { CenteredContainer } from 'components/CenteredContainer'

export const Loading = () => {
  const { colors } = useTheme()
  return (
    <CenteredContainer>
      <ActivityIndicator color={colors.primary} />
    </CenteredContainer>
  )
}
