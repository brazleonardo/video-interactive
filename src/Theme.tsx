import { ReactNode } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// eslint-disable-next-line react-refresh/only-export-components
export const theme = {
  colors: {
    primary: '#333333',
    secondary: '#AFDBD2',
    primaryBtn: '#111111',
    viewedBtn: '#e0bf05',
    successBtn: '#06b45d',
    errorBtn: '#db1717',
    infoBtn: '#0c83e6',
    disabledBtn: '#b1b1b1',
    textPrimaryContrast: '#ffffff',
    textSecondaryContrast: '#111111',
    barVideoSlider: '#ffffff',
    sliderInteractive: '#db5b30',
    quizCheck: '#dedede',
    quizChecked: '#b1b1b1',
    quizCheckedSuccess: '#AFDBD2',
    quizCheckedError: '#dbb6af',
    bgCard: '#fff',
    bgEndApproved: '#AFDBD2',
    bgEndNotApproved: '#dbb6af',
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  
  body, button, span, h1, h2, h3, h4, h5, li, p {
    font-family: ${theme.fonts[0]};
  }

  html, body, .root {
    width: 100%;
    height: 100%;
  }

  input, textarea {
    outline: none;

    &:focus {
      box-shadow: inset 0 0 10px rgba(30, 30, 30, 0.7);
    }
  }
`

type Props = {
  children: ReactNode
}

const AppThemeProvider = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

export default AppThemeProvider
