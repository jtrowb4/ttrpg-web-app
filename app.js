//imports
import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

//set directory
const __dirname = dirname(fileURLToPath(import.meta.url));

//initial app set up
const app = express();
const port = chalk.green('3000');
const logger = debug('app');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

//initial get request
app.get('/', (req, res)=>{
    res.send('Express application loaded');
});

app.listen(3000, ()=>{
    logger(`Express Server listening on port ${port}`);
});