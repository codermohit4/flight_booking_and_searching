const {CityService }= require('../services/index')

const cityService = new CityService();


// POST -> /city -> req.body
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.error("Create Error:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error.message || error
        });
    }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.error("Delete Error:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error.message || error
        });
    }
};

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.error("Get Error:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error.message || error
        });
    }
};

// PATCH -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.error("Update Error:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error.message || error
        });
    }
};

// GET -> /city
const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.error("GetAll Error:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the cities',
            err: error.message || error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
};
