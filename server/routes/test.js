import { Router } from "express";
import {test} from "../controllers/test.js"

const router = new Router()

//test
router.post('/1', test)


export default router