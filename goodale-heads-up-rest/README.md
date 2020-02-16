# GHU REST API Project
It's a special thing.

## To Run
This bad boy is using `node.js` and `Express.js` with `npm` for the package manager.

### You'll need a .env file that specifies a port number

This is not included in the repo, because this is where the secrets live (or, will live eventually)

```
PORT=<local port number like 3000>
```

### NPM Install

From the root of this directory, be sure to run `npm install` to install all the packages.

### NPM Test

We have some super silly and/or brittle unit tests to make sure the framework is there. You can (and should) run them with `npm test`

### NPM Start

When you're ready to fire up the actual app, `npm start` will do the trick.

Currently we're still in dev mode, so hot reload is on. Save changes in a file, and the app will update itself immediately.

#### REST API REMINDER

This app has no UI, so you'll have to navigate to the correct URL in your browser or execute a `curl` command to see it.