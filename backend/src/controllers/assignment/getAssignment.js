const db = require("../../db")

module.exports.getAssignment = async (req, res)=>{
    try {
        const data = await db.query("select * from assignment where standard=$1 and subject=$2", [req.query.standard_id, req.query.subject_id]);
        res.status(200).send({data:data.rows})
    } catch (error) {
        console.log(error.routine);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}