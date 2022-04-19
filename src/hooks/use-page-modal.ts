import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  const PageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    if (PageModalRef.value) {
      // console.log('PageModalRef.value')
      PageModalRef.value.dialogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (PageModalRef.value) {
      PageModalRef.value.dialogVisible = true
    }
  }
  return [PageModalRef, defaultInfo, handleNewData, handleEditData]
}
