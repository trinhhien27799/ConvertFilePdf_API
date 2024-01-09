const express = require('express');
const router = express.Router();
const renderController = require('../controllers/fileRender');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

// The Shit: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of Object
// The Idea: up pdf file lên firebase để lưu cho đỡ nặng máy, code trong react
// Sau ấy thì mình lấy ảnh từ firebase để chuyển hóa ra các file khác nhau

// Define routes
router.post('/word', upload.single('pdfFile'), renderController.wordRender);
router.post('/powerpoint', upload.single('pdfFile'), renderController.slideRender);
router.post('/image', upload.single('pdfFile'), renderController.imageRender);
// Add more routes as needed

module.exports = router;
