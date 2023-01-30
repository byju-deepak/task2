const db = require("../../db");

module.exports.getSubjects = async (req, res)=>{
    try {
        const data = await db.query("select subject_id, name, image from subject where subject_id = any (ARRAY(select std.subjects from student stud inner join standard std on stud.standard = std.standard_id  where stud.student_id = $1))", [req.body.id])
        res.status(200).send({subjects : data.rows})
    } catch (error) {
        console.log(error.message);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({subjects : []})
        }
        res.status(500).send({error: error.message});
    }
}