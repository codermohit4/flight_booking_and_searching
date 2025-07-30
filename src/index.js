require('dotenv').config();
const express = require("express");
// const { Airport, City } = require('./models/index'); // ✅ Corrected import
const bodyParser = require("body-parser");
const db = require('./models/index');
const { PORT } = require('./config/server');
const apiRoutes = require('./routes/index');
const CityRepository = require('./repository/city-repository');
const {airplane} = require('./models/index')
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', apiRoutes);

 app.listen(PORT, async () => {
  console.log(`Server started at ${PORT}`);

  // const city = await City.findOne({ where: { id: 6 } });

  // const newAirport = await Airport.create({
  //   name: 'Jindal Vijaynagar Airport',
  //   address: 'Ballari, Karnataka',
  //   cityId: city.id // or just 6
  // });

  

  // const airports = await city.getAirports();
  // console.log("City:", city.name);
  // console.log("Airports in city:", airports.map(a => a.name));

  if(process.env.SYNC_DB){
   db.sequelize.sync({alter:true})
   //dont use force it will drop the table and create new one  or delete the old ones


   // creating direct  airplane   dont forget to add db in env file
  //  await airplane.create({
  //   modelnumber: 'airindia',
  //   capacity: 200
  // });
  

  }
});
}

setupAndStartServer();
