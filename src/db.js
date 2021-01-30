import Knex from 'knex';
import Bookshelf from 'bookshelf';
import config from '../knexfile';
import env from './env';

const knex = Knex(config[env.nodeEnv]);
const bookshelf = Bookshelf(knex);

export { bookshelf, knex };
export default knex;
