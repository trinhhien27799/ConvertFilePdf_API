const { default: ConvertAPI } = require('convertapi');

const convertAPI = new ConvertAPI('ABpTyCkbcve4Md2w');

const wordRender = async (req, res) => {
    const inPdfFile = req.file;
    console.log(inPdfFile);
    var getFile = null

    convertAPI.convert('docx', {
        File: `${inPdfFile.path}`
    }, 'pdf').then(function (result) {
        result.saveFiles('/saveConvertFile/');
        getFile = result.response.Files
        console.log(getFile);
        res.send(JSON.stringify(getFile));
    });
};

const slideRender = (req, res) => {
    const inPdfFile = req.file;
    console.log(inPdfFile);
    var getFile = null

    convertAPI.convert('pptx', {
        File: `${inPdfFile.path}`
    }, 'pdf').then(function (result) {
        result.saveFiles('/saveConvertFile/');
        getFile = result.response.Files;
        console.log(getFile);
        res.send(JSON.stringify(getFile));
    });
};

const imageRender = (req, res) => {
    const inPdfFile = req.file;
    console.log(inPdfFile);
    var getFile = null

    convertAPI.convert('png', {
        File: `${inPdfFile.path}`
    }, 'pdf').then(function (result) {
        result.saveFiles('/saveConvertFile/');
        getFile = result.response.Files;
        console.log(getFile);
        res.send(JSON.stringify(getFile));
    });;
}

module.exports = {
    wordRender,
    slideRender,
    imageRender
};
