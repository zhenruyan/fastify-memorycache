
const fastify = require('fastify')()
fastify.register(require('../app'))

fastify.get('/', function (request, reply) {
  fastify.cache.kv.set("a","aaaaaa")
  reply.send({ hello: fastify.cache.kv.get("a") })
})
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
