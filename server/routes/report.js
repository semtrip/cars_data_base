import { Router } from "express";
import {addReport, deleteReport, getReports, getReport} from "../controllers/report.js"

const router = new Router()

//addReport
router.post('/add', addReport)
//deleteReport
router.delete('/del', deleteReport)
// getReports
router.get('/getAll', getReports)
// getReport
router.get('/get', getReport)

export default router