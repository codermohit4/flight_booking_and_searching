const {FlightRepository, AirplaneRepository }= require('../repository/index') 
const { comparetime } = require('../utils/helper'); 
class FlightService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
    }
    async createFlight(data) {
        try {
            if(!comparetime(data.arrivalTime, data.departureTime)){
                throw {error: "Arrival time cannot be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId); // use this.airplaneRepository
            const flightRepository = new FlightRepository();
            const flight = await flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    
    async getFlight(data){
        try {
            const flightRepository = new FlightRepository();
            const flight = await flightRepository.getFlight(data.id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async updateFlight(data){
        try {
            const flightRepository = new FlightRepository();
            const flight = await flightRepository.updateFlight(data.id, data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async getAllFlights(data){
        try {
            const flightRepository = new FlightRepository();
            const flights = await flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    // dont forget to update in controller also in flight-controller.js
    // name of getAllFlights is getall
    
}
module.exports = FlightService;

/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats
 * boardingGate
 */