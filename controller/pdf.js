import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { createToken, verifyToken } from '../utils/jwt.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './uploads/');
        },
        filename(req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    })
});

const pdf = (req, res) => {

    if (!req.files || (!req.files.file1 && !req.files.file2)) {
        return res.status(400).json({ message: "No files uploaded" });
    }

    res.cookie("token",createToken({email:req.query.email}),{httpOnly:true,secure:true,maxAge:1000*60*60*24*30});

    return res.json({
        message: "PDFs uploaded successfully!",
        files: req.files
    });
};


export { storage };
export default pdf;
