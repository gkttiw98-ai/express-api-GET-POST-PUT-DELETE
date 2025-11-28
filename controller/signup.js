import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import User from '../config/db.js';

export var signup = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
}

export var response = async (req,res)=>{
   
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    


    const file1 = req.files.file1[0].filename;
    const file2 = req.files.file3[0].filename;


    const user = new User({
        name,
        email,
        password,
        file1,
        file2
    });

    await user.save();

    res.json({
        message: "User Registered Successfully",
        name,
        email,
        password,
        file1,
        file2
    });

}




    

    

