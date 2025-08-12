const { FlightService } = require('../services');
const {SuccessCode} = require('../utils/error-code');
const flightService = new FlightService();

const createFlight = async (req, res) => {
  try {
    const flightrequestdata = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price
    }
    const flight = await flightService.createFlight(req.body); // ✅ FIXED
    return res.status(SuccessCode.CREATED).json({
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
