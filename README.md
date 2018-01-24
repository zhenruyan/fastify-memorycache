# fastify-memorycache
Mimic the memory cache of the Redis API


##  fast start

```
npm i fastify-memorycache --save

```


###  Implemented part
    
* kv

    set
    get
    del
    dump
    exists
    expire
    persist
    randomkey
    append
    decr
    incr
    getrange
    strlen
    setrange
    ttl
    mget
    getset

* hash (Part)

    hmset
    hgetall
    hexists
    hget
    hdel
    hmget
    hkeys
    hvals
    hlen

* set   (Part)

    sadd
    scard
    srem
    spop


##   example

```

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


```

##   document

[English](https://github.com/zhenruyan/napi-cache/wiki/nedis-cache---document)

[简体中文](https://github.com/zhenruyan/napi-cache/wiki/nedis-cache%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)

