import styled from 'styled-components'

interface PropsForm {
  $isLoading: boolean
}

export const Form = styled.form<PropsForm>`
  position: relative;

  filter: ${(props) => (props.$isLoading ? `blur(2px)` : `blur(0)`)};

  &:before {
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${(props) => (props.$isLoading ? `10` : `-1`)};
  }
`
