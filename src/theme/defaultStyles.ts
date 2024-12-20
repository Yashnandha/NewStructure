import colors from '@theme/color';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.backdropped,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: colors.white,
    borderRadius: 16,
    gap: 20,
  },
  flex: {
    flex: 1,
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});