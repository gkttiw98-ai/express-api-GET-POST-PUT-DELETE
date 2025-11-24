var test=(req,res)=>
    {res.json({message:`Test endpoint is working!  ${req.query.name} ${req.query.class}`})
};
export{test};