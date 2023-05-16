const express = require('express');
const router = express.Router();
const createReport = require('../controller/report');
router.post('/:id/create_report', createReport.generateReport);
router.get('/:id/all_report', createReport.getAllReports);
router.get('/:status', createReport.searchByStatus);
module.exports = router;