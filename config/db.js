import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/upload')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    file1: String,
    file2: String
});

export default mongoose.model("uploadfile", userSchema);