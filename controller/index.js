const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.home = async function (req, res) {
    return res.send("<h1>Welcome to Hospital management API.It can manage hospital and patient data</h1>");
}

module.exports.Register = async function (req, res) {
    try {
        let searchDoctor = await Doctor.find({ email: req.body.email });
        let registeredDoctor = searchDoctor;
        if (searchDoctor.length == 0) {
            searchDoctor = new Doctor(req.body);
            registeredDoctor = await searchDoctor.save();
        }
        return res.json(200, {
            message: "Doctor Register!!",
            doctor: registeredDoctor
        })
    } catch (error) {
        return res.send("Error in registation !!");
    }
}

module.exports.Login = async function token(req, res) {
    try {
        const searchDoctor = await Doctor.findOne({ email: req.body.email });
        if (searchDoctor) {
            let token = jwt.sign(searchDoctor.toJSON(), 'hospitalApi', { expiresIn: 6000 * 6000 });
            return res.json(200, {
                message: "Login SuccessFully !! Here is your token. Please keep it safe.",
                token: token,
            })
        } else {
            return res.send("Email/ Password is incorrect !!");
        }
    } catch (error) {
        return res.send("Login failed : Error!!", error);
    }
}