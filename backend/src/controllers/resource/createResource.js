const db = require("../../db")

module.exports.createResource = async (req, res)=>{
    try {
        // subject, std, ch
        await db.query("begin TRANSACTION");
        const resource = await db.query('insert into resource(name, type, url, subject, standard, chapter) values($1, $2, $3, $4, $5, $6) returning resource_id ',[req.body.name, req.body.type, req.body.url, req.body.subject, req.body.standard, req.body.chapter])
        await db.query("select notify('resource', $1, $2, $3)", [req.body.subject, req.body.chapter, req.body.standard]);
        await db.query("update chapter set resources=array_append(resources, $1) where chapter_id=$2", [resource.rows[0].resource_id, req.body.chapter]);
        await db.query("commit");
        res.status(200).send({success:"resource created"});
    } catch (error) {
        console.log(error);
        await db.query("rollback")
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}