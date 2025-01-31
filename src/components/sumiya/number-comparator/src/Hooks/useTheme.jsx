import { useContext } from 'react'
import { ThemeContext } from '../components/contexts'

export function useTheme() {
  return useContext(ThemeContext);
}
