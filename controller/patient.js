const Patient = require("../models/patient");
const jwt = require('jsonwebtoken');

module.exports.register = async function (req, res) {
    try {
        let searchPatient = await Patient.find({ phone: req.body.phone });
        if (searchPatient && searchPatient.length > 0) {
            return res.send(searchPatient);
        } else {
            searchPatient = new Patient(req.body);
            let addPatient = await searchPatient.save();
            let pat = jwt.sign(addPatient, id);
            return res.send(addPatient);
        }
    } catch (error) {
        return res.send(`error in register!!${error}`);
    }
}