const { FlightService } = require('../services');
const flightService = new FlightService();

const createFlight = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body); // ✅ FIXED
    return res.status(201).json({
      data: flight,
      success: true,
      message: 'Successfully created a flight',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create a flight',
      err: error.message || error
    });
  }
};

module.exports = {
  createFlight
};
