const db = require("../../db")

module.exports.markAsCompleted = async (req, res)=>{
    try {
        var exists = await db.query("select count(*) num from progress where chapter=$1 and student=$2 and subject=$3", [req.query.chapter_id, req.body.id, req.query.subject_id]);
        if(parseInt(exists.rows[0].num) == 0)
            await db.query("insert into progress(chapter, student, subject) values($1, $2, $3) ",[req.query.chapter_id, req.body.id, req.query.subject_id]) 
        var data = await db.query("update progress set completed = array_append(completed, $1) where chapter=$2 and student=$3 and subject=$4", [req.query.resource_id, req.query.chapter_id, req.body.id, req.query.subject_id]);
        res.status(200).send({success:"update successful"});
    } catch (error) {
        console.log(error);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}