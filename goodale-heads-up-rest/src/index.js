import 'dotenv/config'
import callMyFunction from './services/exampleService.js'

console.log('I AM COUNTING SPACES HERE!\nLike nonstop. On a loop. For reasons.\n');

callMyFunction(() => {
    console.log("This is inside a higher-order function, y'all.\n");
});

console.log(process.env.MY_SECRET_FIELD);