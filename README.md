# TODO APP - Node and Express   

To use the application, follow the first steps.

## Install node.js
Link to learning to install node.js:
[nodejs](https://nodejs.org)

## DATABASE -> Postgresql
The database used is **Postgresql** version **13**.
Create the file **.env** in root path and your data from db, examples:   
```
DB_HOST=<host>
DB_PORT=<port>
DB_NAME=<db name>
DB_USERNAME=<username>
DB_PASSWORD=<password>
```

## DEPENDENCIES
* express
* express-session
* express-handlebars
* sequelize
* dotenv
* pq (postgres dependencie)
* pq-hstore (postgres dependencie)

To install the dependencie, use the npm, example:
`
npm install <dependencie-name> --save
`
The command **--save** is used to install the dependencie only your project and not global.