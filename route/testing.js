import express from 'express';
import {test} from "../controller/test.js";
import {post} from "../controller/routeparamete.js";

var router = express.Router();

router.get('/test',test);
router.post('/post',post);

export default router;