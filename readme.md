# supero_teste

## Description
This application was make for a test purpose, It's a complete project to list books from a database, with pagination, search and filter engine on frontend side and a REST API with endpoints to provide the required services.

## Essencial Environment Tecnologies
- Nodejs
- Yarn
- MongoDB

## Tecnologies

### FrontEnd
- Javascript
- React
- Redux
- Redux Saga
- Pure CSS (No Css Framework like boostrap)
- HTML

### Backend
- Javascript
- Nodejs
- Express
- noSQL Database (MongoDB)
- Mongoose (ODM)

## Instructions

### Backend
1. On the backend directory run `$ yarn` to install all required dependencies
2. copy .env.example and rename to .env on backend > src > env
3. generate the APP SECRET by execute this command `$ yarn appSecretGenerate`
4. Copy and paste the generated hash inside .env APP_SECRET
5. Put the MongoDB credentials on those env variables DB_HOST, DB_NAME, DB_USER, DB_PORT, DB_PASS
6. run `$ yarn start` to run server
7. If you want to change the server port just change the .env PORT variable to which port you desire

### Frontend
1. On the frontend directory run `$ yarn` to install all required dependencies
2. Execute `$ yarn start` and done, if you want to build the frontend to production just execure `$ yarn build`
