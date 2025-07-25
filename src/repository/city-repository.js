const { City } = require('../models/index');

const { Op } = require('sequelize');




class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.error("Repository Error in createCity:", error); // Better logging
      throw error; // ✅ FIXED: don't wrap
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: { id: cityId }
      });
      return true;
    } catch (error) {
      console.error("Repository Error in deleteCity:", error);
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      // the below approach also works but not return updated the object
      // if you are using pgsql then it wil work
      // const city = await City.update(data, {
      //   where: { id: cityId },
      // returning: true,
      // plain: true,
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.error("Repository Error in updateCity:", error);
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.error("Repository Error in getCity:", error);
      throw error;
    }
  }
  async getAllCities(filter) {
    try {
      if(filter.name){
        const cities = await City.findAll({
          where: {
            name: {
              [Op.like]: `%${filter.name}%`
            }
          }
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities; 
    } catch (error) {
      console.error("Repository Error in getAllCities:", error);
      throw error;
    }
  }
}

module.exports = CityRepository;
