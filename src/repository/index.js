module.exports = {
    CityRepository: require('./city-repository'),
    FlightRepository: require('./flight-respository'), // ✅ fixed typo here
    AirplaneRepository: require('./airplane-repository'),
    AirportRepository: require('./airport-repository'),
    CrudRepository: require('./crud-repository')
};
