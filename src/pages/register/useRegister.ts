import { useState, useCallback, ChangeEvent } from 'react'

export default function useRegister() {
  const [file, setFile] = useState<FileList | null>(null)
  const [urlVideo, setUrlVideo] = useState<string>('')

  const handleChange = useCallback(
    ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
      const file = files![0]
      const url = URL.createObjectURL(file)

      setFile(files)
      setUrlVideo(url)
    },
    [],
  )

  return { file, urlVideo, handleChange }
}
