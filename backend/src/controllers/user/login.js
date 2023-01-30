const db = require("../../db")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res)=>{
    try {
        var data = await db.query("select * from student where email=$1", [req.body.email_id]);
        if(data.rowCount == 0){
            return res.status(404).send({error : "No user found"});
        }
        data = data.rows[0];
        if(await bcrypt.compare(req.body.password, data.password) == false){
            return res.status(403).send({error : "Wrong password"})
        }
        const token = jwt.sign({
            id : data.student_id
        }, "HELLOWORLD");
        res.status(200).send({token});
    } catch (error) {
        console.log(error.routine);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}