
import { createTheme } from "@mui/material/styles";

const changeTheme = (mode: 'light'| 'dark') => 
    createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? {
            primary : {
              main: '#1D212C'
            },
            background: {
              default: '#ECECEC',
              paper: '#fff',
            },
            text: {
              primary: '#1D212C',
              secondary: 'rgba(0, 0, 0, 0.6)',
              disabled: 'rgba(0, 0, 0, 0.38)',
            },
            action: {
              active: 'rgba(0, 0, 0, 0.54)',
              hover: 'rgba(0, 0, 0, 0.04)',
              selected: 'rgba(0, 0, 0, 0.08)',
              disabled: 'rgba(0, 0, 0, 0.26)',
              disabledBackground: 'rgba(0, 0, 0, 0.12)'
            },
            divider : 'rgba(0, 0, 0, 0.12)'
          } : {
            primary : {
              main: '#fff'
            },
            background: {
              default: '#1D212C',
              paper: '#1D212C',
            },
            text: {
              primary: '#fff',
              secondary: 'rgba(255, 255, 255, 0.6)',
              disabled: 'rgba(255, 255, 255, 0.38)',
            },
            action: {
              active: 'rgba(255, 255, 255, 0.54)',
              hover: 'rgba(255, 255, 255, 0.04)',
              selected: 'rgba(255, 255, 255, 0.08)',
              disabled: 'rgba(255, 255, 255, 0.26)',
              disabledBackground: 'rgba(255, 255, 255, 0.12)'
            },
            divider : 'rgba(255, 255, 255, 0.12)'
          })
        }
    })

export default changeTheme;