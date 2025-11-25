import express from 'express';
import {test} from "../controller/test.js";
import {post}  from "../controller/routeparamete.js";
import pdf,{storage} from "../controller/pdf.js";
import {header} from "../controller/header.js";

var router = express.Router();

router.get('/test',test);
router.post('/post',post);
router.post('/pdf',storage.fields([{name:'file1'},{name:"file2"}]),pdf);
router.get('/header',header);

export default router;