import app from './app';
import knex from './database/database'


async function main() {
    await app.listen(app.get('port'));
    knex();
    console.log('Server on port', app.get('port'));
}
main();

