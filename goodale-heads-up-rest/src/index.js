import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import spaceCount from './services/spaceService.js';

const app = express();
const portNumber = process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
    res.send('We are counting spaces SO HARD right now! Try navigating to \"/spaces\" to see how we\'re doing!');
  });

app.get('/spaces', (req, res) => {
    return res.send(`There are currently ${spaceCount()} spaces available!`);
  });

// I have no idea if these are even worth defining...seems thorough, but who knows?
app.post('/spaces', (req, res) => {
    return res.send('POST HTTP method unused');
});

app.put('/spaces', (req, res) => {
    return res.send('PUT HTTP method unused');
});

app.delete('/spaces', (req, res) => {
    return res.send('DELETE HTTP method unused');
});

// Tick mark instead of quotes to get interpolation
app.listen(portNumber, () => console.log(`Listening on port: ${portNumber}`));