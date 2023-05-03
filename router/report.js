const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const createReport = require('../controller/report');
router.post('/:id/create_report', auth.checkAuthentication, createReport.generateReport);
router.get('/:id/all_report', auth.checkAuthentication, createReport.getAllReports);
router.get('/:status', createReport.searchByStatus);
module.exports = router;