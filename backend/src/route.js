const { Router } = require("express");
const { getChapter } = require("./controllers/chapter/getChapter");
const { getProgress } = require("./controllers/subject/getProgress");
const { getChapterProgress } = require("./controllers/chapter/getProgress");
const { getSubject } = require("./controllers/subject/getSubject");
const { getSubjects } = require("./controllers/subject/getSubjects");
const { authUser } = require("./controllers/user/auth");
const { verifyJWT } = require("./middleware/verifyjwt");
const { markAsCompleted } = require("./controllers/resource/maskAsCompleted");
const { getAssignment } = require("./controllers/assignment/getAssignment");
const { register } = require("./controllers/user/register");
const { login } = require("./controllers/user/login");


const router = Router();

router.get("/api/user", verifyJWT, authUser);
router.get("/api/subject/all", verifyJWT, getSubjects);
router.get("/api/subject", verifyJWT, getSubject);
router.get("/api/subject/chapter", verifyJWT, getChapter);
router.get("/api/subject/progress", verifyJWT, getProgress);
router.get("/api/chapter/progress", verifyJWT, getChapterProgress);
router.post("/api/resource/markasread", verifyJWT, markAsCompleted);
router.get("/api/assignment", verifyJWT, getAssignment);
router.post("/api/user", register);
router.post("/api/user/login", login)


module.exports = router;