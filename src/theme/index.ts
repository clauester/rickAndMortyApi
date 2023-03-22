
import { createTheme } from "@mui/material/styles";

const das = 'dark'

const changeTheme = (mode: 'light'| 'dark') => 
    
    createTheme({
        palette: {
           mode,
           ...(mode === 'light'?{
            background: {default: '#ECECEC'}
           }: {
            background: {default:'rgba(51, 58, 61, 0.9)' }
           })
           
        },     
        components:{
            MuiAppBar:{
                defaultProps:{
                    style: {
                      // background: mode === 'light' ? '#fff':'#50595C'
                      ...(mode === 'light' ?{
                        background: '#fff'
                      }:{
                        background: '#50595C'
                      })
                    }
                }
            },
            MuiButton: {
              defaultProps:{
                style: {
                  color: 'black'
                }
              }
            }
            
        }
        // components:{
        //     MuiAppBar:{
        //         defaultProps: {
        //             style: {
        //                 background: '#50595C'
        //             }
        //         }
        //     },
        //     MuiButton: {
        //         defaultProps: {
        //             style: {
        //                 color: 'white'
        //             }
        //         }
        //     }
        // }
   

})


export default changeTheme;