var post=   (req,res)=>
    {res.json({message:`Post endpoint is working!  ${req.body.title} ${req.body.name} ${req.body.roll}`})
}

export {post};