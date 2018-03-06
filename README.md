# React, Redux, NodeJS, MongoDB starter kit with authentication mechanism (JWT).

Project is separated into:
- frontend application(React, Redux)
- api(NodeJS, express, MongoDB)

### How to run

1. Install live server: npm install -g live-server 
2. Install mongodb - on macos: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x
3. Use correct version of node - tested on node 9.0.0 - can be easily done with https://github.com/creationix/nvm

Go to front folder and run:
```sh
$ npm install
$ npm run build
```

Go to dist folder and run:
```
$ live-server --entry-file=index.js //in next console tab
```

Go to api folder and run:
```sh
$ npm install
$ npm run dev
```

Or just type to open frontend and api part of project in separate terminal tabs at once:
```sh
$ ./start.sh
```

### Next steps
configure application with docker

### Demo application:
https://guarded-sea-39932.herokuapp.com/#/

