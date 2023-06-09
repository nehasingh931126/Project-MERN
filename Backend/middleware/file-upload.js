const multer =  require('multer');
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}
const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploades/images', )
    },
    filename: (req, file, cb) => {
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, uuid()+ '.'+ ext)
    },
    fileFilter: (req, res, cb)=> {
        const ext = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid ? null: new Error('invalid mime type ')
        cb(error, isValid)
    }
  }),
});

module.exports = fileUpload;