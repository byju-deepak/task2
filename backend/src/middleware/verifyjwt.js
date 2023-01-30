const jwt = require("jsonwebtoken");

module.exports.verifyJWT = (req, res, next)=>{
    try {
        if(!req.headers["auth-token"]){
            return res.status(403).send({error:"Unauthancated"});
        }
        req.body.id = jwt.decode(req.headers["auth-token"], "HELLOWORLD").id;
        console.log(req.body.id)
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({error : error.message});
    }
}