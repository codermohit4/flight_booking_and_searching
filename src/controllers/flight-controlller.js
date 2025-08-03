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

const getAllFlights = async (req, res) => {
  try {
    const response = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully fetched all flights',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch all flights',
      err: error.message || error
    });
  }
};
 // now we update the route in index.js
 // app.get('/flights', flightController.getall);

module.exports = {
    createFlight,
  getAllFlights
};
