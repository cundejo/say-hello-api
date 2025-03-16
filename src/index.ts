import 'dotenv/config';
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const server: FastifyInstance = fastify({ logger: true });

server.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  // Testing environment variables
  console.log("Secret 1", process.env.SECRET1);

  const name = (request.query as any)?.name as string | undefined;
  reply.send(name ? `Hello ${name}!` : 'Hello World!');
});

const start = async (): Promise<void> => {
  try {
    const port = Number(process.env.PORT) || 8080;
    await server.listen({ port, host: '0.0.0.0' });
    server.log.info(`Server is running on port ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
