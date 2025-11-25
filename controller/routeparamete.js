var post=   (req,res)=>
    {res.json({message:`Post endpoint is working!  ${req.body.title} ${req.body.name} ${req.body.roll}`})
      res.cookie("name","John",{httpOnly:true,secure:true,maxAge:1000*60*60*24*30});}

export {post};