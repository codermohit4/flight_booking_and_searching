const { airplane } = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplaneData = await airplane.findByPk(id); // ✅ use different variable name
            return airplaneData;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}

module.exports = AirplaneRepository;
