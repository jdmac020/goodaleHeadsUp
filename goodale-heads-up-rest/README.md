# GHU REST API Project
It's a special thing.

## To Run
This bad boy is using `node.js` and `Express.js` with `npm` for the package manager.

### You'll need a .env file that specifies a port number

This is not included in the repo, because this is where the secrets live (or, will live eventually)

Example contents of the .env file:
```
PORT=<local port number like 3000>
```

### NPM Install

From the root of this directory, be sure to run `npm install` to install all the packages the first time you fire this up on a new machine.

### NPM Test

We have some super silly and/or brittle unit tests to make sure the framework is there. You can (and should) run them with `npm test`

### NPM Start

When you're ready to fire up the actual app, `npm start` will do the trick.

Currently we're still in dev mode, so hot reload is on. Save changes in a file, and the app will update itself immediately.

#### REST API REMINDER

This app has no UI, so you'll have to navigate to the correct URL in your browser or execute a `curl` command to see it.

## Resources
I followed a series of blog posts (making small changes as needed to make it our own app and in cases where APIs had changed) from [Robin Wieruch](https://www.robinwieruch.de/)

[How to set up a modern JavaScript project](https://www.robinwieruch.de/javascript-project-setup-tutorial)
[The minimal Node.js with Babel Setup](https://www.robinwieruch.de/minimal-node-js-babel-setup)
[How to setup Express.js in Node.js](https://www.robinwieruch.de/node-js-express-tutorial)
[How to create a REST API with Express.js in Node.js](https://www.robinwieruch.de/node-express-server-rest-api)