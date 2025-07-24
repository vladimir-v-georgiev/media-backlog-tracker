import Fastify from 'fastify';
import path from 'path';
import fastifyStatic from '@fastify/static';

import Backlog from './backend/backlog';
import Item from './backend/item';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({ logger: true });

interface FormData {
  title: string,
  length: number,
  genre: string
}

interface RemoveData {
  title: string
}

const BACKLOG_DATA_FILE = './database/backlog-data.json';




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



const backlog: Backlog = new Backlog();

//load and save data to JSON 
async function loadData() {
  let data: any[] = [];
  try {
    const content = await fs.readFile(BACKLOG_DATA_FILE, 'utf-8');
    data = JSON.parse(content);
  } catch {
    data = [];
  }
  data.forEach(element => {
    let item = new Item(element);
    backlog.add(item);
  })
}

async function saveData() {
  await fs.writeFile(BACKLOG_DATA_FILE, JSON.stringify(backlog.getBacklogObject(), null, 2));
}

//Fastify config 
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

const removeSchema = {
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string' }
    }
  }
}

fastify.post<{ Body: FormData }>('/submit', { schema: postSchema }, async (request, reply) => {
  return { message: 'Data valid!', data: request.body };
});

//view
fastify.post('/view', async (request, reply) => {
  const response = backlog.getBacklogString().replace(/\n/g, "<br>");
  return { message: 'Backlog displayed!', data: response };
})

//add
fastify.post<{ Body: FormData }>('/add', { schema: postSchema }, async (request, reply) => {
  const item = new Item(request.body);
  backlog.add(item);
  await saveData();
  return { message: 'Object successfully added!' };
})

//update
fastify.post<{ Body: FormData }>('/update', { schema: postSchema }, async (request, reply) => {
  backlog.update(request.body['title'], request.body);
  await saveData();
  return { message: 'Object successfully updated!' };
})

//remove
fastify.post<{ Body: RemoveData }>('/remove', { schema: removeSchema }, async (request, reply) => {
  backlog.remove(request.body['title']);
  await saveData();
  return { message: 'Object successfully deleted!' };
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

loadData().then(start);

