const Report = require('../models/report');

module.exports.generateReport = async function (req, res) {
    try {
        let searchReport = await Report.find(req.body);
        if (searchReport && searchReport.length > 0) {
            return res.send(searchReport);
        } else {
            searchReport = new Report(req.body);
            let reportCreated = await searchReport.save();
            return res.send(reportCreated);
        }

    } catch (error) {
        return res.send("Error in generating the report - ", error);
    }
}

module.exports.getAllReports = async function (req, res) {
    try {
        const patientId = req.params.id;
        const allReport = await Report.find({ patientId: patientId });
        return res.send(allReport);
    } catch (error) {
        return res.send("error");
    }
}

module.exports.searchByStatus = async function (req, res) {
    try {
        const status = req.params.status;
        const result = await Report.find({ status: status });
        return res.json(200, {
            results: result,

        });
    } catch (error) {
        return res.send(error);
    }
}