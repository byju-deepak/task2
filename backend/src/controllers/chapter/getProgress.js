const db = require("../../db")

module.exports.getChapterProgress = async (req, res)=>{
    try {
        var data = await db.query("select * from progress where student=$1 and chapter=$2", [req.body.id, req.query.chapter_id]);
        res.status(200).send({data: data.rows});
    } catch (error) {
        console.log(error.routine);
        if(error.routine === "accumArrayResultArr"){
            return res.status(200).send({chapters : []})
        }
        res.status(500).send({error : "Server side error"})
    }
}