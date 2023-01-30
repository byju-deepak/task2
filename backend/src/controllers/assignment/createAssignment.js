const db = require("../../db")

module.exports.createAssignment = async (req, res)=>{
    try {
        // subject, std, ch
        await db.query("begin TRANSACTION");
        const resource = await db.query('insert into assignment(topic, ass_content, url, subject, standard, chapter) values($1, $2, $3, $4, $5, $6)',[req.body.topic, req.body.ass_content, req.body.url, req.body.subject, req.body.standard, req.body.chapter])
        await db.query("select notify('assignment', $1, $2, $3)", [req.body.subject, req.body.chapter, req.body.standard]);
        await db.query("commit");
        res.status(200).send({success:"assignment created"});
    } catch (error) {
        console.log(error);
        await db.query("rollback")
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}