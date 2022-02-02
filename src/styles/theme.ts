export default {
  name: 'default',
  grid: {
    container: '120rem',
    gutter: '5.2rem',
    maxContent: '70rem'
  },
  colors: {
    primary: ' #EEEEEE',
    secondary: '#393E46',
    background: '#222831',
    highlight: '#00ADB5',
    outline: '#cc4949',
    warning: '#dc143c',
    success: 'rgb(172, 243, 157)',
    info: 'rgb(85, 193, 255)',
    white: '#FAFAFA',
    gray0: 'rgb(245, 245, 253)',
    gray1: 'rgb(241, 241, 243)',
    gray2: 'rgb(221, 221, 223)',
    gray3: 'rgb(201, 201, 203)',
    gray4: 'rgb(181, 181, 184)',
    gray5: 'rgb(161, 161, 164)',
    gray6: 'rgb(141, 141, 144)',
    gray7: 'rgb(121, 121, 124)',
    gray8: 'rgb(101, 101, 104)',
    gray9: 'rgb(81, 81, 84)',
    gray10: 'rgb(61, 61, 64)',
    gray11: 'rgb(41, 41, 44)',
    gray12: 'rgb(21, 21, 24)',
    black: 'rgb(0, 0, 0)'
  },
  font: {
    family: {
      default: "'Source Sans Pro', sans-serif"
    },
    sizes: {
      tiny: '0.8rem',
      xsmall: '0.8rem',
      small: '1.6rem',
      normal: '1.8rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem'
    }
  },
  spacings: {
    xxtiny: '0.1rem',
    xtiny: '0.2rem',
    tiny: '0.4rem',
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem'
  },
  transitions: {
    fastest: 'all 100ms ease-in-out',
    faster: 'all 200ms ease-in-out',
    fast: 'all 300ms ease-in-out',
    normal: 'all 500ms ease-in-out',
    slow: 'all 600ms ease-in-out',
    slower: 'all 800ms ease-in-out',
    slowest: 'all 1s ease-in-out'
  },
  layers: {
    normal: 0,
    layer1: 1,
    layer2: 2,
    layer3: 3,
    layer4: 4,
    layer5: 5,
    layer6: 6,
    layer7: 7,
    layer8: 8,
    layer9: 9,
    aboveAll: 10
  }
} as const
