import mongo from 'mongodb';
import findConfig from 'find-config';
import dotenv from 'dotenv';

dotenv.config({ path: findConfig('.env') });
const MongoClient = mongo.MongoClient;

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*
 * listDatabases is purely for connection testing.
 * Expected output:
 * Databases:
 * - admin
 * - local
 * */

const listDatabases = async client => {
  const databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const connection = async () => {
  try {
    await client.connect();
    await listDatabases(client);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

export default connection;
