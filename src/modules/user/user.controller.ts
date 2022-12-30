import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserInput } from "./user.schema";
import { createUser } from "./user.service";

export async function registerUserHandler(
    req: FastifyRequest<{
        Body: CreateUserInput
    }>, 
    res: FastifyReply) {
        const body = req.body;
        try{
            const user = {'123': '12'}
            // const user = await createUser(body);
            
            return res.code(201).send(user);
        }catch(e){
            console.log(e)
            return res.code(500).send(e);
        }
}