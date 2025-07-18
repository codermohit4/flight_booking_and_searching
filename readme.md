# Welcome to Flights Service

## Project Setup

1. Clone the project to your local machine.
2. Run `npm install` in the root directory of the project.
3. Create a `.env` file in the root directory and add the following environment variable:

   ```env
   PORT=3000

   4. inside the src/config create a new file congig.json and then add the following piece of code.

{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "flights_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

once you've added your db config as listed above . go to the src folder from your terminal and execute `nox sequelize db:create`