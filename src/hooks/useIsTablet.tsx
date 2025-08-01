import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const useIsTablet = (): boolean => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('md'))
}

export default useIsTablet
