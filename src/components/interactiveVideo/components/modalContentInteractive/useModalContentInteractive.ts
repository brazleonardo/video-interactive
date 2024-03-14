import { useRegisterVideo } from '@/contexts/registerVideo'

import { TypeIteractiveContent } from '@/types/iteractiveVideo'

export default function useModalContentInteractive() {
  const { modal, onCloseModal, onOpenModal } = useRegisterVideo()

  const onCancel = () => {
    onCloseModal()
  }

  const onChangeType = (type: TypeIteractiveContent) => {
    onOpenModal({
      open: true,
      data: {
        type,
        statuPaused: modal.data!.statuPaused,
      },
    })
  }

  return { onCancel, onChangeType }
}
