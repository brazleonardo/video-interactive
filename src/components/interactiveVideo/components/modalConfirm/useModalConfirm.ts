import { useRegisterVideo } from '@/contexts/registerVideo'

export default function useModalConfirm() {
  const { confirm, onCloseConfirm, setContentInteractive } = useRegisterVideo()

  const handleOnSubmit = () => {
    setContentInteractive((oldContentInteractive) => {
      return [
        ...oldContentInteractive.filter(
          (item) => item.time !== confirm.statusPaused!.time,
        ),
      ]
    })

    onCloseConfirm()
  }

  return { confirm, onCloseConfirm, handleOnSubmit }
}
