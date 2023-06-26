import 'dotenv/config';
import express, {request, response} from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from "body-parser";
import models from "./models";
import routes from "./routes";

const MyApp = express();

MyApp.use(cors());
MyApp.use(bodyParser.json());
MyApp.use(bodyParser.urlencoded({ extended: true }));
MyApp.use('/users', routes.user);
MyApp.use('/messages', routes.message);
MyApp.use('/quotes', routes.quotes);

MyApp.listen(3001, () =>{
    console.log(process.env.ENVIRONMENT);
    console.log('Example app listening on port 3001!')
});
