import request from '@/utils/request'

// 查询用户签到列表
export function listSign(query) {
  return request({
    url: '/lean/sign/list',
    method: 'get',
    params: query
  })
}

// 查询用户签到详细
export function getSign(id) {
  return request({
    url: '/lean/sign/' + id,
    method: 'get'
  })
}

// 新增用户签到
export function addSign(data) {
  return request({
    url: '/lean/sign',
    method: 'post',
    data: data
  })
}

// 修改用户签到
export function updateSign(data) {
  return request({
    url: '/lean/sign',
    method: 'put',
    data: data
  })
}

// 删除用户签到
export function delSign(id) {
  return request({
    url: '/lean/sign/' + id,
    method: 'delete'
  })
}
