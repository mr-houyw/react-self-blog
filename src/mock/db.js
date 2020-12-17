let Mock = require('mockjs')
let Random = Mock.Random
module.exports = function () {
  var data = {
    articel: []
  }

  for (let i = 0; i < 10; i++) {
    data.articel.push({
      "id": Random.id(),
      "title": Random.ctitle(5, 10),
      "desc": Random.cparagraph(2, 5),
      "content": Array(5).fill(null).map(item => item = Random.cparagraph(30)),
      "tag": Random.cword(2, 6),
      "image": Random.image('200x200', Random.color(), Random.cword())
    })
  }
  return data
}