import { ChangeEvent } from 'react'

import * as Component from './styled'

interface Props {
  label: string
  url: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

const ButtonUpload = ({ label, url, onChange }: Props) => (
  <Component.Container $hasFile={!!url}>
    <Component.Button size={'large'}>
      <Component.MdOutlineCloudUpload size={30} />
      {label}
      <Component.InputFile onChange={onChange} alt="" title="" />
    </Component.Button>
    <Component.When is={!!url}>
      <Component.Attachment src={url} />
    </Component.When>
  </Component.Container>
)

export default ButtonUpload
