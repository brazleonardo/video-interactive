import * as Component from './styled'

import { PropsButton } from './interface'

const Button = ({ type, size, color, ...rest }: PropsButton) => (
  <Component.Button
    type={type ?? 'button'}
    size={size ?? 'medium'}
    color={color}
    {...rest}
  >
    {rest.children}
  </Component.Button>
)

export default Button
