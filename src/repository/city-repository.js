const { City } = require('../models/index');





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
      const city = await City.update(data, {
        where: { id: cityId }
      });
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
}

module.exports = CityRepository;
