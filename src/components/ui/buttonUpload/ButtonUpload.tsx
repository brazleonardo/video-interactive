import { ChangeEvent } from 'react'

import * as Component from './styled'

interface Props {
  label: string
  url: string
  file: FileList | null
  accept?: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

const ButtonUpload = ({ label, url, file, accept, onChange }: Props) => (
  <Component.Container>
    <Component.Inner $hasFile={!!file}>
      <Component.Button type="button" size={'large'}>
        <Component.MdOutlineCloudUpload size={30} />
        {label}
        <Component.InputFile
          onChange={onChange}
          alt=""
          title=""
          accept={accept}
        />
      </Component.Button>
    </Component.Inner>
    <Component.When is={!!url}>
      <Component.Attachment src={url} />
    </Component.When>
  </Component.Container>
)

export default ButtonUpload
