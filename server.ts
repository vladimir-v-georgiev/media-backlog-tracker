import Fastify from 'fastify';
import path from 'path';
import fastifyStatic from '@fastify/static';

import Backlog from './backend/backlog';
import Item from './backend/item';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({ logger: true });

interface FormData {
  title: string,
  length: number,
  genre: string
}

//init object
const config = [
  {
      title: "Elden Ring",
      length: 100,
      genre: "Souls-Like"
  },
  {
      title: "The Witcher 3",
      length: 200,
      genre: "Action-RPG"
  },
  {
      title: "Undertale",
      length: 10,
      genre: "Indie"
  },
  {
      title: "Final Fantasy 7: Rebirth",
      length: 68,
      genre: "JRPG"
  },
  {
      title: "Uncharted: Drake's Fortune",
      length: 20,
      genre: "Adventure"
  }
]
const backlogItems: Item[] = [];
config.forEach(element => {
  const item = new Item(element);
  backlogItems.push(item);
});
const backlog = new Backlog(backlogItems);


fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'frontend'), // where your HTML/JS lives
  prefix: '/', // serve at root (http://localhost:3000/index.html)
});

const postSchema = {
  body: {
    type: 'object',
    required: ['title', 'length', 'genre'],
    properties: {
      title: { type: 'string' },
      length: { type: 'number' },
      genre: { type: 'string' },
    }
  }
};

fastify.post<{ Body: FormData}>('/submit', { schema: postSchema }, async (request, reply) => {
  return { message: 'Data valid!', data: request.body };
});

fastify.post('/view', async (request, reply) => {
  const response = backlog.getBacklog().replace(/\n/g, "<br>");
  return { message: 'Data valid!', data: response };
})

fastify.post<{ Body: FormData }>('/add', { schema: postSchema }, async (request, reply) => {
  const item = new Item(request.body);
  backlog.add(item);
  return { message: 'Object successfully added!'};
})

fastify.post<{ Body: FormData }>('/update', { schema: postSchema }, async (request, reply) => {
  backlog.update(request.body['title'],request.body);
  return { message: 'Object successfully updated!'};
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '127.0.0.1' });
    console.log('Server running at http://127.0.0.1:3000/');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

