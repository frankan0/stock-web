import request from '@/utils/request'

export function queryAmplifyVol(params) {
  return request({
    url: '/stock/queryAmplifyVol',
    method: 'get',
    params
  })
}