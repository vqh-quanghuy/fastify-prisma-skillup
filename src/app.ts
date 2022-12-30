import Fastify from "fastify";
import userRoutes from "./modules/user/user.route";

const fastify = Fastify()
fastify.get('/healthcheck', async function (req, res) {
    return { status: "OK" };
})

async function main() {
    fastify.register(userRoutes, {prefix: 'api/users'})
    try{ 
        await fastify.listen({port: 3000, host: "0.0.0.0"});
        console.log(`Server ready at http://localhost:3000`);
    }catch(e) {
        console.error(e);
        process.exit(1);
    }
}

main();