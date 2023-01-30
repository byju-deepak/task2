const db = require("../../db")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res)=>{
    try {
        var data = await db.query("select * from student where email=$1", [req.body.email_id]);
        if(data.rowCount != 0){
            return res.status(400).send({error : "User already exist! Try other email"});
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        var {name, phone_no, email_id, permanent_address, permanent_pin, current_address, current_pin, standard, password} = req.body;
        const standard_data = await db.query("select standard_id from standard where standard = $1", [standard]);
        standard = standard_data.rows[0].standard_id;
        const values = [name, phone_no, email_id, permanent_address + " " +permanent_pin, current_address + " " + current_pin, standard, password];
        var data = await db.query("insert into student(name, phone_no, email, per_address, cur_address, standard, password) values($1, $2, $3, $4, $5, $6, $7) returning student_id", values);
        const token = jwt.sign({
            id : data.rows[0].student_id
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