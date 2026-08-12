import { StyleSheet } from 'react-native'
import { colors, spacing } from './index'

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.lg,
    backgroundColor: colors.canvas,
  },
})