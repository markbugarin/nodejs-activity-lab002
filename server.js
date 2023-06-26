import 'dotenv/config';
import express from 'express';

const MyApp = express();

MyApp.get('/', (request, response) => {
   response.send('Hello World!');
});

MyApp.listen(3000, () =>{
    console.log(process.env.ENVIRONMENT);
    console.log('Example app listening on port 3000!')
});
// console.log('Hello World! Running my first Node.js Project.');

