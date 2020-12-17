const request = require('../utils/requests')
module.exports = {
  getArticel: function () {
    return request({
      method: "get"
    })
  },
  getNum: function () {
    return 100
  }
}