import { FastifyInstance } from "fastify";

export function userRoutes(fastify: FastifyInstance){
    const userUseCase = new User
    fastify.post('/',(req,reply) =>{
        try {
            
        } catch (error) {
            reply.send(error)
        }
    })
}