const { AirportService } = require("../services"); 
const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body); // ✅ fixed here
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created the airport",
            err: {}
        });
    } catch (error) {
        console.log("Airport creation error:", error); // optional but helpful
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong",
            err: error
        });
    }
}

module.exports = {  
    create
}
