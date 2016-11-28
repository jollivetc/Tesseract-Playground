var express = require('express');
var util = require('util');
var multer  = require('multer');
var Tesseract =require('tesseract.js')

var upload = multer({ dest: 'uploads/' })
var router = express.Router();

router.post('/', upload.single('fileToUpload'), function (req, res, next) { 
  // req.body will hold the text fields, if there were any 
  /*  res.send(util.format(' Task Complete \n uploaded %s (%d Kb) to %s as %s'
            , req.file.originalName
            , req.file.image.size / 1024 | 0
            , req.file.image.path
            , req.body.title
            , req.file.image
            , '<img src="uploads/' + pathArray[(pathArray.length - 1)] + '">'
        ));
   */
  Tesseract.recognize(req.file.path, {lang:'fra'})
    .then(function(result){res.send(result.html)})  
        
})

module.exports = router;


/*
{
fieldname: "fileToUpload",
originalname: "ticket.jpeg",
encoding: "7bit",
mimetype: "image/jpeg",
destination: "uploads/",
filename: "390f3d0e45faebfc6dd1fa299343f3b4",
path: "uploads/390f3d0e45faebfc6dd1fa299343f3b4",
size: 257007
}
*/