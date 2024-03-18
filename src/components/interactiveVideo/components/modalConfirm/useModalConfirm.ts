import { useRegisterVideo } from '@/contexts/registerVideo'

export default function useModalConfirm() {
  const { confirm, onCloseConfirm, setContentInteractiveRegister } =
    useRegisterVideo()

  const handleOnSubmit = () => {
    setContentInteractiveRegister((oldContentInteractive) => {
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
