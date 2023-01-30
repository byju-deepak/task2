const db = require("../../db")

module.exports.getProgress = async (req, res)=>{
    try {
        const data = await db.query("select * from progress where student=$1 and subject=$2", [req.body.id, req.query.subject_id])
        return res.send({data : data.rows})
    } catch (error) {
        console.log(error.routine);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}