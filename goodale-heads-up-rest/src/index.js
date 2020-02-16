import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import callMyFunction from './services/exampleService.js';

const app = express();
const portNumber = process.env.PORT;

console.log('I AM COUNTING SPACES HERE!\nLike nonstop. On a loop. For reasons.\n');

callMyFunction(() => {
    console.log("This is inside a higher-order function, y'all.\n");
});

console.log(process.env.MY_SECRET_FIELD);

app.use(cors());

app.get('/', (req, res) => {
    res.send('We are counting spaces SO HARD right now!');
  });

app.get('/test', (req, res) => {
    res.send('We are unit testing literally everything, even getters and setters.');
});

// Tick mark instead of quotes to get interpolation
app.listen(portNumber, () => console.log(`Listening on port: ${portNumber}`));