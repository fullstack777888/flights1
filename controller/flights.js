const { getAllFlightsDetails } = require('../db/flights');

const getFlights = async (req, res) => {
    try {
        const flights = await getAllFlightsDetails();
        res.json(flights)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addFlight = async (req, res) => {
    try {
        // add logic
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateFlight = async (req, res) => {
    try {
        // add logic
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getFlights,
    addFlight,
    updateFlight
}