const db = require("../../db")

module.exports.getNotification = async (req, res)=>{
    try {
        const data = await db.query("select * from notification where notification_id = any (ARRAY (select notifications from student where student_id = $1)) and createdat > now() - interval '1 week' order by createdat", [req.body.id]);
        res.status(200).send({data : data.rows})
    } catch (error) {
        console.log(error);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({data : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}