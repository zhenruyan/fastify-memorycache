'use strict'
const fp = require('fastify-plugin')
const cache=require('nedis-cache');
function fastifyCache (fastify, opts, next) {
    fastify.decorate('cache',cache)
    next()
}
module.exports = fp(fastifyCache, { fastify: '>=0.13.1' })

