import styled from 'styled-components'

import Button from '@/components/ui/button'

export { Button }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Label = styled.label`
  font-weight: bold;
`

export const TextArea = styled.textarea.attrs({ rows: 5 })`
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`
