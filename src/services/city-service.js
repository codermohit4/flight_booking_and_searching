const { CityRepository } = require('../repository/index');

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      if (!data.name) {
        throw new Error("City name is required");
      }

      console.log("Creating city with data:", data);
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.error("Service Layer Error in createCity:", error);
      throw error; // 🔥 fixed: no wrapping
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.error("Service Layer Error in deleteCity:", error);
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.error("Service Layer Error in updateCity:", error);
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.error("Service Layer Error in getCity:", error);
      throw error;
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({name: filter.name});
      return cities;
    } catch (error) {
      console.error("Service Layer Error in getAllCities:", error);
      throw error;
    }
  }
}

module.exports = CityService;
