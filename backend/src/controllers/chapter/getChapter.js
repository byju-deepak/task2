const db = require("../../db")

module.exports.getChapter = async (req, res)=>{
    try {
        var data = await db.query("select subject_id from subject where subject_id = any (ARRAY(select std.subjects from student stud inner join standard std on stud.standard = std.standard_id  where stud.student_id = $1)) and subject_id=$2;", [req.body.id, req.query.subject_id]);
        console.log(data);
        if(data.rowCount === 0){
            return res.status(401).send({error:"Unauthorized for subject"});
        }
        console.log(req.query.subject_id, req.query.chapter_id);
        data = await db.query("select chapter_id from chapter where chapter_id = any (ARRAY(select chapters from subject where subject_id=$1)) and chapter_id=$2", [req.query.subject_id, req.query.chapter_id]);
        if(data.rowCount === 0){
            return res.status(401).send({error: "Unauthorized for chapter"})
        }
        data = await db.query("select * from resource where resource_id = any(ARRAY(select resources from chapter where chapter_id=$1))", [req.query.chapter_id])
        res.status(200).send({resources : data.rows})
    } catch (error) {
        console.log(error.routine);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}