import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void
export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const PageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (PageModalRef.value) {
      // console.log('PageModalRef.value')
      PageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (PageModalRef.value) {
      PageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }
  return [PageModalRef, defaultInfo, handleNewData, handleEditData]
}
