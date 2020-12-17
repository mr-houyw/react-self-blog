/**
 *@description 设置sessionStorage
 */

//  获取session
export const getSessionStorage = function (key) {
  const session = sessionStorage.getItem(key)
  return JSON.parse(session)
}
// 设置sessionStorage
export const setSessionStorage = function (key, json) {
  sessionStorage.setItem(key, JSON.stringify(json))
}
// 删除sessionStorage
export const delSessionStorage = function (key) {
  sessionStorage.removeItem(key)
}
// 清空sessionStorage
export const clearSessionStorage = function () {
  sessionStorage.clear()
}
