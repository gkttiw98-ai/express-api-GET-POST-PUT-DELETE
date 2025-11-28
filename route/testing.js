import express from 'express';
import {test} from "../controller/test.js";
import {post}  from "../controller/routeparamete.js";
import pdf,{storage} from "../controller/pdf.js";
import {header} from "../controller/header.js";
import {signup,response} from "../controller/signup.js";
import multer from "multer";

var router = express.Router();



 


const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");   // folder where files will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: diskStorage });


router.post('/response',upload.fields([{name:'file1'},{name:'file3'}]),response);
router.get('/signup',signup);
router.get('/test',test);
router.post('/post',post);
router.post('/pdf',storage.fields([{name:'file1'},{name:"file2"}]),pdf);
router.get('/header',header);

export default router;