const db = require("../../db")

module.exports.getSubject = async (req, res)=>{
    try {
        var data = await db.query("select subject_id from subject where subject_id = any (ARRAY(select std.subjects from student stud inner join standard std on stud.standard = std.standard_id  where stud.student_id = $1)) and subject_id=$2;", [req.body.id, req.query.subject_id]);
        if(data.rowCount === 0){
            return res.status(401).send({error:"Unauthorized for subject"});
        }
        data = await db.query("select chapter_id, name, subject, resources from chapter where chapter_id = any (ARRAY(select chapters from subject where subject_id=$1))", [req.query.subject_id]);
        res.status(200).send({chapters : data.rows})
    } catch (error) {
        console.log(error.routine);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}