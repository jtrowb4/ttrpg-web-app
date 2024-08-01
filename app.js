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
const port = process.env.PORT;
const logger = debug('app');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

//initial setter
app.set('views', './src/views');
app.set('view engine', 'ejs');

//initial get request
app.get('/', (req, res)=>{
    res.render('index', {title: 'Welcome to the TTRPG Home Page', 
        data:['Dungeons & Dragons', 'Pathfinder', 'Warhammer']});
});

app.listen(port, ()=>{
    logger(`Express Server listening on port ${chalk.green(port)}`);
});