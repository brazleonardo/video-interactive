import styled from 'styled-components'
import { MdOutlineCloudUpload } from 'react-icons/md'

import When from '@/components/when'
import { Attachment } from '@/components/interactiveVideo'
import Button from '../button'

export { When, Attachment, Button, MdOutlineCloudUpload }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const Inner = styled.div<{ $hasFile: boolean }>`
  button {
    position: relative;
    overflow: hidden;
    background-color: ${(props) =>
      props.$hasFile
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
  }
`

export const InputFile = styled.input.attrs({ type: 'file' })`
  width: 1000px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  opacity: 0;
`
