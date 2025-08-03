const { Flights } = require('../models/index');
const { Op } = require('sequelize');

/**
 * This line is importing Sequelize's "Operators" utility — Op stands for Operators.

These operators are used to build advanced SQL queries in Sequelize, such as:
comparisons (>, <, =, etc.)ranges
logical conditions (AND, OR)
LIKE queries
NOT IN, BETWEEN, etc.
 */

class FlightRepository {

    // ✅ FIXED: filter was never declared — declare it first
    #createFilter(data) {
        const filter = {}; // ❗️ ERROR FIXED: declare `filter` before using it

        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        /**  $ node
        Welcome to Node.js v22.15.1.
        Type ".help" for more information.
        > filter = {arrivalAirportId: 3} 
        { arrivalAirportId: 3 }
        > Object.assign(filter, {departureAirportId: 4}
        ... Object.assign(filter, {departureAirportId: 4})
        Object.assign(filter, {departureAirportId: 4}
                                                ^

        Uncaught SyntaxError: missing ) after argument list
        > Object.assign(filter, {departureAirportId: 4})
        { arrivalAirportId: 3, departureAirportId: 4 }
        > filter
        { arrivalAirportId: 3, departureAirportId: 4 }
        >   yeh hi niche use kiya humne
        */

        if (data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and]: [
                    {price: {[Op.gte]: data.minPrice}},
                    {price: {[Op.lte]: data.maxPrice}}
                ]
            });
        }
        if(data.minPrice){
            Object.assign(filter, {
                price: {[Op.gte]: data.minPrice}
            });
        }
        if(data.maxPrice){ 
            Object.assign(filter, {
                price: {[Op.lte]: data.maxPrice}
            });
        }

        if (data.tripDate) {
            Object.assign(filter, {
                departureDate: {
                    [Op.eq]: data.tripDate
                }
            });
        }

        if (data.travellers) {
            Object.assign(filter, {
                totalSeats: {
                    [Op.gte]: data.travellers
                }
            });
        }

        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    // ❗️ ERROR FIXED: `getflight` was using incorrect param name `data`
    // ❗️ ERROR FIXED: Renamed to `getFlight` for better convention (optional but recommended)
    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId); // ✅ FIXED: was `data` before
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    // ❗️ ERROR FIXED: Method was named `getAllflight`, which caused `getAllFlights is not a function`
    async getAllFlights(filter) {
        try {
            const filterobj = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterobj
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

}

module.exports = FlightRepository;


/*
{
    arrivalAirportId: 3,
    departureAirportId: 4,
    op.get = greater than or equal to
    op.lte = less than or equal to
    price: {[Op.gte]: 1000, [Op.lte]: 10000},
    minPrice: 1000,
    maxPrice: 10000,
    tripDate: "2025-08-01",
    travellers: 2
}
*/

// dont forget to read the documentation model querying-basic sequelize  
