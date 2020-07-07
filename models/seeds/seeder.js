const { Seeder } = require('mongo-seeding');

const config = {
    database: {
      host: '127.0.0.1',
      port: 27017,
      name: 'horrorstoriesdb',
    },
    dropDatabase: true,
  };

  const seeder = new Seeder(config);

const path = require('path');
const collections = seeder.readCollectionsFromPath(path.resolve("./data"));

  const seed = async()=>{

    try {
        await seeder.import(collections);
      } catch (err) {
        // Handle errors
        console.log("import failed")
      }
      // Do whatever you want after successful import
      console.log("import succeded") 
  }
 seed() 