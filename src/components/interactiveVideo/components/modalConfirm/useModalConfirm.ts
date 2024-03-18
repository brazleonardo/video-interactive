import { useRegisterVideo } from '@/contexts/registerVideo'

export default function useModalConfirm() {
  const { confirm, onCloseConfirm, setContentInteractiveRegister } =
    useRegisterVideo()

  const handleOnSubmit = () => {
    setContentInteractiveRegister((oldContentInteractiveRegister) => {
      return {
        ...oldContentInteractiveRegister,
        data: [
          ...oldContentInteractiveRegister.data.filter(
            (item) => item.time !== confirm.statusPaused!.time,
          ),
        ],
      }
    })

    onCloseConfirm()
  }

  return { confirm, onCloseConfirm, handleOnSubmit }
}
