# How to use

## Docker

- To create the database, use this command:
  `docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=<username> -e MONGO_INITDB_ROOT_PASSWORD=<password> mongo`

- In the .env, put this:
  MONGO_URI="mongodb://username:password@localhost:27017/"

## Js Backend

- `git pull <repo>`
- `npm i`
- `node server.js`
