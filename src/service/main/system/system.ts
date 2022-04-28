import zlRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return zlRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
// url: /users/id
export function deletePageData(url: string) {
  return zlRequest.delete<IDataType>({
    url: url
  })
}
export function createPageData(url: string, newData: any) {
  return zlRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return zlRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
