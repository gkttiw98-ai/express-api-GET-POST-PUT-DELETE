var header=(req,res)=>{
    if(!req.headers.name){
        return res.status(401).json({message:"name is required"});
    }
    
    
    res.status(200).json({message:"name is "+req.headers.name});
}

export {header};