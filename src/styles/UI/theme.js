// src/assets/styles/theme.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const powder = "#66B9BF"
export const red = '#D32F2F'
export const darkRed = '#C1272D'
export const white = '#ffffff'
export const smoke = '#F5F5F5'
export const black = '#000000'
export const blue = '#00008B'
export const darkBlue = '#2d3142'
export const grey = '#DEDEDE'
export const grey50 = 'rgba(222, 222, 222, 0.5)'
export const grey30 = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
    primary1Color: darkBlue,
    primary2Color: darkBlue,
    primary3Color: powder,
    accent1Color: powder,
    textColor: black,
    alternateTextColor: black,
    canvasColor: white,
    borderColor: grey,
    disabledColor: grey30
}

export default getMuiTheme({ palette })