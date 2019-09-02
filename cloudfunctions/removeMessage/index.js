const cloud = require('wx-server-sdk')

cloud.init({
  env: 'test-154312'
})

const db = cloud.database()

exports.main = async (event, context) => {
    try {
      return await db.collection('message').where({
        relationId: event.relationId
      }).remove()
    } catch (e) {
      console.error(e)
    }
}