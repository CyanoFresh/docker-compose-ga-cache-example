const fastify = require('fastify')({
    logger: true
})

fastify.get('/', async (request, reply) => {
    return { hello: 'world test' }
})

const start = async () => {
    try {
        await fastify.listen(process.env.PORT)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
