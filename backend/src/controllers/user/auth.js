const db = require("../../db");

module.exports.authUser = async (req, res)=>{
    try {
        const data = await db.query('select * from student where student_id=$1', [req.body.id]);
        if(data.rowCount === 0){
            return res.status(401).send({error : "Unable to authenticate user"});
        }
        data.rows[0].password = "";
        const standard = await db.query("select standard from standard where standard_id = $1", [data.rows[0].standard]);
        data.rows[0].standard = standard.rows[0].standard;
        res.status(200).send({user : data.rows});
    } catch (error) {
        console.log(error)
        console.log(error.message);
        res.status(500).send({error : "Server side error"})
    }
}