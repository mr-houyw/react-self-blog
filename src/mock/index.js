const Mock = require('mockjs')
const data = require('./db')
Mock.mock(process.env.REACT_APP_BASE_URL, 'get', () => {
  return data()
})