import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Server connected with database'));
