const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const destpath = path.join(__dirname, '../../public/upload');
const upload = multer({ dest : destpath});
const mergePDF = require('../pdfmerger');
const mergePdfPath = path.join(__dirname, '../../public/mergerfile');
router.use('/static', express.static(mergePdfPath));

router.get("/", (req, res) => {
    res.render('index');
})

router.post("/merge", upload.array('myPdf', 10), async (req, res) => {
    try {
        const filename = await mergePDF(req.files);
        res.redirect(`http://localhost:3000/static/${filename}.pdf`);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;