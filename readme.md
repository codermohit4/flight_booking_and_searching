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


#db design 
-airplane table
- flight
-airport
-city

##tables
### city -> id, name , created_at , updated_At;
### airport -> id , name , adress, city_id , created_at, updated_at 

realationship -> city has many airports and airports belong to a city(one to many)

```
## npx sequelize model:generate --name airport --attributes name:String,address:String,cityId:integer
## npx sequelize db:migrate
``
// using for the seeders 
$ npx sequelize seed:generate --name add-airports
\

task to do instead of thi show can we use in index.js file and join all airports
mysql> select *from airports joiner  cities on airports.cityId = cities.id where cities.id = 5;

 this wil show you the all airports in theseerv