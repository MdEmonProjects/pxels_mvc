const express = require('express');
const router = express.Router();

const {
    getUser,
    saveImage,
    getImage,
    imageDetails,
    developerProfile
} = require('../controllers/users.controllers.js');

const multer = require('multer');

 const UPLOAD_FOLDER='./uploads';
 
 var upload = multer({
   dest: UPLOAD_FOLDER,
 })

router.get('/', getUser);

router.post('/upload',upload.array("avatar"),saveImage);
router.get('/upload', getImage);
router.get('/images', getImage);

router.get('/details', imageDetails);
router.get('/about', developerProfile);


// All requests made with the client will be authenticated

module.exports = router;